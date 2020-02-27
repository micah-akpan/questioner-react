import { genHash } from '.';

export default [
  {
    id: genHash(),
    title: 'edit',
    icon: 'src/resources/icons/pencil-edit-button.svg',
    iconDescription: 'a dark green pencil',
    classList: ['edit-option']
  },

  {
    id: genHash(),
    title: 'delete',
    icon: 'src/resources/icons/delete-red.svg',
    iconDescription: 'a red trash bin',
    classList: ['delete-option']
  }
];
