'use strict';"use strict";
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = window;
exports.window = win;
exports.document = window.document;
exports.location = window.location;
exports.gc = window['gc'] ? function () { return window['gc'](); } : function () { return null; };
exports.performance = window['performance'] ? window['performance'] : null;
exports.Event = window['Event'];
exports.MouseEvent = window['MouseEvent'];
exports.KeyboardEvent = window['KeyboardEvent'];
exports.EventTarget = window['EventTarget'];
exports.History = window['History'];
exports.Location = window['Location'];
exports.EventListener = window['EventListener'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtRWc5YndtbnMudG1wL2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxJQUFJLEdBQUcsR0FBRyxNQUFNO0FBRUQsY0FBTSxPQUZKO0FBR04sZ0JBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQzNCLGdCQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUMzQixVQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQU0sT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBZCxDQUFjLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7QUFDdEQsbUJBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNqRSxhQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLGtCQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLHFCQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hDLG1CQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BDLGVBQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsZ0JBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUIscUJBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG52YXIgd2luID0gd2luZG93O1xuXG5leHBvcnQge3dpbiBhcyB3aW5kb3d9O1xuZXhwb3J0IHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbmV4cG9ydCB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG5leHBvcnQgdmFyIGdjID0gd2luZG93WydnYyddID8gKCkgPT4gd2luZG93WydnYyddKCkgOiAoKSA9PiBudWxsO1xuZXhwb3J0IHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvd1sncGVyZm9ybWFuY2UnXSA/IHdpbmRvd1sncGVyZm9ybWFuY2UnXSA6IG51bGw7XG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW5kb3dbJ0V2ZW50J107XG5leHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpbmRvd1snTW91c2VFdmVudCddO1xuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW5kb3dbJ0tleWJvYXJkRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpbmRvd1snRXZlbnRUYXJnZXQnXTtcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luZG93WydIaXN0b3J5J107XG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW5kb3dbJ0xvY2F0aW9uJ107XG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpbmRvd1snRXZlbnRMaXN0ZW5lciddO1xuIl19