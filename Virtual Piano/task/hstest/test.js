const path = require('path');
const pagePath = 'file://' + path.resolve(__dirname, '../src/index.html');
const {StageTest, correct, wrong} = require('hs-test-web');

class Test extends StageTest {

    page = this.getPage(pagePath)

    tests = [
        this.page.execute(() => {
                let bodyNodes = Array.from(document.body.childNodes);
                this.innerBodyElements = bodyNodes.filter(
                    e => e.nodeType === Node.ELEMENT_NODE);

                let len = this.innerBodyElements.length;

                return len === 7 ?
                    correct() :
                    wrong(`There should be 7 elements in the body of the HTML document, found: ${len}`)
            }
        ),
        this.page.execute(() => {
            let failNum = 0;
            let failElem = '';
            let i = 0;
            for (let elem of this.innerBodyElements) {
                i++;
                elem = elem.nodeName.toLowerCase();
                if (elem !== 'kbd') {
                    failNum = i;
                    failElem = elem;
                    break;
                }
            }

            return failNum === 0 ?
                correct() :
                wrong(`Element #${failNum} is not <kbd> element, it's <${failElem}>`);
        }),
        this.page.execute(() => {
            let failNum = 0;
            let textInside = '';
            let i = 0;
            for (let elem of this.innerBodyElements) {
                i++;
                elem = elem.innerHTML;
                if (elem.length !== 1) {
                    failNum = i;
                    textInside = elem;
                    break;
                }
            }

            if (failNum === 0) {
                return correct();
            }

            if (textInside.length === 0) {
                return wrong(`Element #${failNum} is empty, ` +
                    `but should contain a single letter.`);
            }

            return wrong(`Element #${failNum} contains ${textInside.length} symbols, ` +
                `but should contain a single letter. The text inside element is:\n"${textInside}"`);
        })
    ]

}

jest.setTimeout(30000);
test("Test stage", async () => {
        await new Test().runTests()
    }
);