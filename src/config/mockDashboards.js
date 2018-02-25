import { Button, Tooltip } from '@blueprintjs/core'

export default [
  {
    id: 16,
    isExpanded: true,
    hasCaret: false,
    className: "mx-tree--label-node",
    label: "Dashboards",
    secondaryLabel: (
      <Tooltip content="New Dashboard">
        <Button className="pt-minimal" icon="plus" />
      </Tooltip>
    ),
    childNodes: [
      {
        id: 0,
        icon: "control",
        label: "Calorie Tracker",
      },
      {
        id: 1,
        icon: "folder-close",
        isExpanded: true,
        label: "Projects",
        childNodes: [
          {
            id: 4,
            icon: "control",
            label: "Clouds Against Humanity",
          },
          {
            id: 5,
            icon: "control",
            label: "Track.ist",
          },
          {
            id: 6,
            isExpanded: true,
            icon: "folder-close",
            label: "School",
            childNodes: [
              {
                id: 7,
                icon: "control",
                label: "School Works",
              },
              {
                id: 8,
                icon: "control",
                label: "Group Projects",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        icon: "control",
        label: "Email",
      },
      {
        id: 3,
        icon: "control",
        label: "Calendar",
      },
      {
        id: 9,
        icon: "control",
        label: "Shopping List",
      },
      {
        id: 16,
        icon: "control",
        label: "Ideas",
      },
      {
        id: 10,
        icon: "folder-close",
        isExpanded: true,
        label: "Class Notes",
        childNodes: [
          {
            id: 11,
            icon: "control",
            label: "Cloud Computing",
          },
          {
            id: 12,
            icon: "control",
            label: "Advanced Topics",
          },
          {
            id: 13,
            icon: "control",
            label: "Information Visualisation",
          },
          {
            id: 14,
            icon: "control",
            label: "NGUI",
          },
        ],
      },
      {
        id: 15,
        icon: "control",
        label: "Paper Tracker",
      },
    ]
  },
];
