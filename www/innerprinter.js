exec = require('cordova/exec');

module.exports = {

  printerInit: function (resolve, reject) {
    exec(resolve, reject, "Printer", "printerInit", []);
  },
  printerSelfChecking: function (resolve, reject) {
    exec(resolve, reject, "Printer", "printerSelfChecking", []);
  },
  getPrinterSerialNo: function (resolve, reject) {
    exec(resolve, reject, "Printer", "getPrinterSerialNo", []);
  },
  getPrinterVersion: function (resolve, reject) {
    exec(resolve, reject, "Printer", "getPrinterVersion", []);
  },
  hasPrinter: function (resolve, reject) {
    exec(resolve, reject, "Printer", "hasPrinter", []);
  },
  getPrintedLength: function (resolve, reject) {
    exec(resolve, reject, "Printer", "getPrintedLength", []);
  },
  lineWrap: function (resolve, reject, count) {
    exec(resolve, reject, "Printer", "lineWrap", [count]);
  },
  sendRAWData: function (resolve, reject, base64Data) {
    exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
  },
  setAlignment: function (resolve, reject, alignment) {
    exec(resolve, reject, "Printer", "setAlignment", [alignment]);
  },
  setFontName: function (resolve, reject, typeface) {
    exec(resolve, reject, "Printer", "setFontName", [typeface]);
  },
  setFontSize: function (resolve, reject, fontSize) {
    exec(resolve, reject, "Printer", "setFontSize", [fontSize]);
  },
  printTextWithFont: function (resolve, reject, text, typeface, fontSize) {
    exec(resolve, reject, "Printer", "printTextWithFont", [text, typeface, fontSize]);
  },
  printColumnsText: function (resolve, reject, colsTextArr, colsWidthArr, colsAlign) {
    exec(resolve, reject, "Printer", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
  },
  printBitmap: function (resolve, reject, base64Data, width, height) {
    exec(resolve, reject, "Printer", "printBitmap", [base64Data, width, height]);
  },
  printBarCode: function (resolve, reject, barCodeData, symbology, width, height, textPosition) {
    exec(resolve, reject, "Printer", "printBitmap", [barCodeData, symbology, width, height, textPosition]);
  },
  printQRCode: function (resolve, reject, qrCodeData, moduleSize, errorLevel) {
    exec(resolve, reject, "Printer", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
  },
  printOriginalText: function (resolve, reject, text) {
    exec(resolve, reject, "Printer", "printOriginalText", [text]);
  },
  printString: function (resolve, reject, text) {
    exec(resolve, reject, "Printer", "printString", [text]);
  },
  printerStatusStartListener: function (onSuccess, onError) {
    exec(onSuccess, onError, "Printer", "printerStatusStartListener", []);
  },
  printerStatusStopListener: function () {
    exec(function () {}, function () {}, "Printer", "printerStatusStopListener", []);
  }

}