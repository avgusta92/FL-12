const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

rootNode.className = 'main-wrap';

function newItem(value, place) {

  let wrap = document.createElement('div');
  wrap.className = `wrap`;
  place.appendChild(wrap);

  let folder = document.createElement('div');
  folder.className = `folder`;
  wrap.appendChild(folder);

  let icon = document.createElement('i');
  icon.innerHTML = 'folder';
  folder.appendChild(icon);

  let lable = document.createElement('lable');
  lable.className = `lable`;
  lable.innerHTML = value.title;
  folder.appendChild(lable);

  if (value.folder === true) {
    icon.className = `icon icon-folder material-icons`;
    icon.innerHTML = 'folder';

  } else if (value.folder !== true) {
    icon.className = `icon icon-file material-icons`;
    icon.innerHTML = 'insert_drive_file';
  }

  if (value.children === false || value.children === null) {

    let newWrap = document.createElement('div');
    newWrap.className = `wrap`;
    wrap.appendChild(newWrap);


    let newLable = document.createElement('lable');
    newLable.className = `lable empty-lable`;
    newLable.innerHTML = `Folder is empty`;
    newWrap.appendChild(newLable);
  }

  function openFolder() {
    let childrenArray = this.children;
    for (let i = 0; i < childrenArray.length; i++) {
      let children = childrenArray[i];

      if (children.className === 'wrap') {
        icon.innerHTML = 'folder_open';
        children.style.display = 'block';
      }
    }
  }

  function closeFolder() {
    let childrenArray = this.children;
    for (let i = 0; i < childrenArray.length; i++) {
      let children = childrenArray[i];

      if (children.className === 'wrap') {
        icon.innerHTML = 'folder';
        children.style.display = 'none';
      }
    }
  }

  function displayFolderFunc(event) {
    let iconFolder = wrap.children[0].children[0];
    if (iconFolder.innerHTML === 'folder') {
      openFolder.apply(wrap);
    } else if (iconFolder.innerHTML === 'folder_open') {
      closeFolder.apply(wrap);
    }
    event.stopPropagation();
  }

  folder.onclick = displayFolderFunc;

  return wrap;
}

function fileTree(array, place) {

  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    let newPlace = newItem(object, place);

    if (object.children) {
      let newArray = object.children;
      fileTree(newArray, newPlace);
    }
  }

}

fileTree(structure, rootNode);