import { Tooltip, Icon } from '@blueprintjs/core'
import { TERM_APPS } from '../config/terminology'

export default [
  {
    id: 0,
    isExpanded: true,
    hasCaret: false,
    className: "mx-tree--label-node",
    label: "Tags",
    childNodes: [
      {
        id: 1,
        icon: "tag",
        label: "Priority",
      },
      {
        id: 2,
        icon: "tag",
        label: "School",
      },
      {
        id: 3,
        icon: "tag",
        label: "Work",
      },
    ]
  },
  {
    id: 4,
    isExpanded: true,
    hasCaret: false,
    className: "mx-tree--label-node",
    label: TERM_APPS,
    childNodes: [
      {
        id: 5,
        icon: "tag",
        label: "Calorie Tracker",
      },
      {
        id: 6,
        icon: "tag",
        label: "Email",
      },
      {
        id: 7,
        icon: "tag",
        label: "Calendar",
      },
      {
        id: 8,
        icon: "tag",
        label: "Shopping List",
      },
      {
        id: 9,
        icon: "tag",
        label: "Ideas",
      },
      {
        id: 10,
        icon: "tag",
        label: "Paper Tracker",
      },
    ]
  },
];
