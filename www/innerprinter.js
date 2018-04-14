


exec = require('cordova/exec');

module.exports = {

  printerInit: function () {
    exec(resolve, reject, "Printer", "printerInit", []);
  },
  printerSelfChecking: function () {
    exec(resolve, reject, "Printer", "printerSelfChecking", []);
  },
  getPrinterSerialNo: function () {
    exec(resolve, reject, "Printer", "getPrinterSerialNo", []);
  },
  getPrinterVersion: function () {
    exec(resolve, reject, "Printer", "getPrinterVersion", []);
  },
  hasPrinter: function () {
    exec(resolve, reject, "Printer", "hasPrinter", []);
  },
  getPrintedLength: function () {
    exec(resolve, reject, "Printer", "getPrintedLength", []);
  },
  lineWrap: function (count) {
    exec(resolve, reject, "Printer", "lineWrap", [count]);
  },
  sendRAWData: function (base64Data) {
    exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
  },
  setAlignment: function (alignment) {
    exec(resolve, reject, "Printer", "setAlignment", [alignment]);
  },
  setFontName: function (typeface) {
    exec(resolve, reject, "Printer", "setFontName", [typeface]);
  },
  setFontSize: function (fontSize) {
    exec(resolve, reject, "Printer", "setFontSize", [fontSize]);
  },
  printTextWithFont: function (text, typeface, fontSize) {
    exec(resolve, reject, "Printer", "printTextWithFont", [text, typeface, fontSize]);
  },
  printColumnsText: function (colsTextArr, colsWidthArr, colsAlign) {
    exec(resolve, reject, "Printer", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
  },
  printBitmap: function (base64Data, width, height) {
    exec(resolve, reject, "Printer", "printBitmap", [base64Data, width, height]);
  },
  printBarCode: function (barCodeData, symbology, width, height, textPosition) {
    exec(resolve, reject, "Printer", "printBitmap", [barCodeData, symbology, width, height, textPosition]);
  },
  printQRCode: function (qrCodeData, moduleSize, errorLevel) {
    exec(resolve, reject, "Printer", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
  },
  printOriginalText: function (text) {
    exec(resolve, reject, "Printer", "printOriginalText", [text]);
  },
  printString: function (text) {
    exec(resolve, reject, "Printer", "printString", [text]);
  },
  printerStatusStartListener: function (onSuccess, onError) {
    exec(onSuccess, onError, "Printer", "printerStatusStartListener", []);
  },
  printerStatusStopListener: function () {
    exec(function () {}, function () {}, "Printer", "printerStatusStopListener", []);
  }

}