import { verifyNoBrowserErrors, browser } from 'angular2/src/testing/e2e_util';
import { expect } from 'angular2/testing';
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($(selector)), 20000);
}
describe('reuse example app', function () {
    afterEach(verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/reuse/';
    it('should build a link which points to the detail page', function () {
        browser.get(URL);
        waitForElement('my-cmp');
        element(by.css('#naomi-link')).click();
        waitForElement('my-cmp');
        expect(browser.getCurrentUrl()).toMatch(/\/naomi$/);
        // type something into input
        element(by.css('#message')).sendKeys('long time no see!');
        // navigate to Brad
        element(by.css('#brad-link')).click();
        waitForElement('my-cmp');
        expect(browser.getCurrentUrl()).toMatch(/\/brad$/);
        // check that typed input is the same
        expect(element(by.css('#message')).getAttribute('value')).toEqual('long time no see!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2Vfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtam5WTEE2TnkudG1wL2FuZ3VsYXIyL2V4YW1wbGVzL3JvdXRlci90cy9yZXVzZS9yZXVzZV9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFDLE1BQU0sK0JBQStCO09BQ3JFLEVBQUMsTUFBTSxFQUFDLE1BQU0sa0JBQWtCO0FBRXZDLHdCQUF3QixRQUFnQjtJQUN0QyxJQUFJLEVBQUUsR0FBUyxVQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDOUMsZ0VBQWdFO0lBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTVCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRWpDLElBQUksR0FBRyxHQUFHLG9DQUFvQyxDQUFDO0lBRS9DLEVBQUUsQ0FBQyxxREFBcUQsRUFBRTtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBELDRCQUE0QjtRQUM1QixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTFELG1CQUFtQjtRQUNuQixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELHFDQUFxQztRQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN6RixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt2ZXJpZnlOb0Jyb3dzZXJFcnJvcnMsIGJyb3dzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL2UyZV91dGlsJztcbmltcG9ydCB7ZXhwZWN0fSBmcm9tICdhbmd1bGFyMi90ZXN0aW5nJztcblxuZnVuY3Rpb24gd2FpdEZvckVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICB2YXIgRUMgPSAoPGFueT5wcm90cmFjdG9yKS5FeHBlY3RlZENvbmRpdGlvbnM7XG4gIC8vIFdhaXRzIGZvciB0aGUgZWxlbWVudCB3aXRoIGlkICdhYmMnIHRvIGJlIHByZXNlbnQgb24gdGhlIGRvbS5cbiAgYnJvd3Nlci53YWl0KEVDLnByZXNlbmNlT2YoJChzZWxlY3RvcikpLCAyMDAwMCk7XG59XG5cbmRlc2NyaWJlKCdyZXVzZSBleGFtcGxlIGFwcCcsIGZ1bmN0aW9uKCkge1xuXG4gIGFmdGVyRWFjaCh2ZXJpZnlOb0Jyb3dzZXJFcnJvcnMpO1xuXG4gIHZhciBVUkwgPSAnYW5ndWxhcjIvZXhhbXBsZXMvcm91dGVyL3RzL3JldXNlLyc7XG5cbiAgaXQoJ3Nob3VsZCBidWlsZCBhIGxpbmsgd2hpY2ggcG9pbnRzIHRvIHRoZSBkZXRhaWwgcGFnZScsIGZ1bmN0aW9uKCkge1xuICAgIGJyb3dzZXIuZ2V0KFVSTCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ215LWNtcCcpO1xuXG4gICAgZWxlbWVudChieS5jc3MoJyNuYW9taS1saW5rJykpLmNsaWNrKCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ215LWNtcCcpO1xuICAgIGV4cGVjdChicm93c2VyLmdldEN1cnJlbnRVcmwoKSkudG9NYXRjaCgvXFwvbmFvbWkkLyk7XG5cbiAgICAvLyB0eXBlIHNvbWV0aGluZyBpbnRvIGlucHV0XG4gICAgZWxlbWVudChieS5jc3MoJyNtZXNzYWdlJykpLnNlbmRLZXlzKCdsb25nIHRpbWUgbm8gc2VlIScpO1xuXG4gICAgLy8gbmF2aWdhdGUgdG8gQnJhZFxuICAgIGVsZW1lbnQoYnkuY3NzKCcjYnJhZC1saW5rJykpLmNsaWNrKCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ215LWNtcCcpO1xuICAgIGV4cGVjdChicm93c2VyLmdldEN1cnJlbnRVcmwoKSkudG9NYXRjaCgvXFwvYnJhZCQvKTtcblxuICAgIC8vIGNoZWNrIHRoYXQgdHlwZWQgaW5wdXQgaXMgdGhlIHNhbWVcbiAgICBleHBlY3QoZWxlbWVudChieS5jc3MoJyNtZXNzYWdlJykpLmdldEF0dHJpYnV0ZSgndmFsdWUnKSkudG9FcXVhbCgnbG9uZyB0aW1lIG5vIHNlZSEnKTtcbiAgfSk7XG5cbn0pO1xuIl19