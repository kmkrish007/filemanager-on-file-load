ej.base.enableRipple(true);
/**
 * File Manager full functionalities sample
 */
var id = 1;
var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
var fileObject = new ej.filemanager.FileManager({
  ajaxSettings: {
    url: hostUrl + 'api/FileManager/FileOperations',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    downloadUrl: hostUrl + 'api/FileManager/Download'
  },
  view: 'LargeIcons',
  fileLoad: function(args) {
    debugger;
    if (
      (args.module == 'LargeIconsView' &&
        args.fileDetails.isFile &&
        args.fileDetails.type == '.png') ||
      args.fileDetails.type == '.jpg'
    ) {
      args.element.setAttribute('id', 'fe' + id);
      var url = args.element.querySelector('.e-list-img').src;
      setTimeout(function() {
        var tooltip = new ej.popups.Tooltip({
          width: '60px',
          height: '60px',
          position: 'BottomCenter',
          content:
            '<div><img src=' + url + 'alt="" width="45" height="45"/></div>',
          beforeClose: function() {}
        });
        tooltip.appendTo('#' + args.element.id);
      }, 100);
      id++;
    }
  }
});
fileObject.appendTo('#filemanager');
