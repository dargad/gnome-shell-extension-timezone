const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Indicator = Me.imports.indicator;

function init() {
}

let _indicator;

function enable() {
	_indicator = new Indicator.TimezoneIndicator;
	Main.panel.addToStatusArea('timezone-indicator', _indicator, 0, 'center');
}

function disable() {
	_indicator.destroy();
	_indicator = null;
}

