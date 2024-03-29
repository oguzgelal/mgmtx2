import MxTextIcon from '../components/MxTextIcon/MxTextIcon'

export const TERM_DASHBOARD = 'Dashboard'
export const TERM_DASHBOARDS = 'Dashboards'
export const ROUTE_DASHBOARDS = 'dashboards'

export const TERM_DATA = 'Data'
export const ICON_DATA = 'database'
export const ROUTE_DATA = 'data'

export const TERM_ENTITY = 'Entity'
export const TERM_ENTITIES = 'Entities'
export const ROUTE_ENTITIES = `${ROUTE_DATA}/classes`
export const ICON_ENTITIES = 'application'
export const TERM_ENTITY_ITEM = 'Member'
export const TERM_ENTITY_ITEMS = 'Members'

export const TERM_COLLECTION = 'Collection'
export const TERM_COLLECTIONS = 'Collections'
export const ROUTE_COLLECTIONS = `${ROUTE_DATA}/sets`
export const ICON_COLLECTIONS = 'intersection'
export const TERM_COLLECTION_ITEM = 'Subset'
export const TERM_COLLECTION_ITEMS = 'Subsets'

export const TERM_VALUE = 'Value'
export const TERM_VALUES = 'Values'
export const ROUTE_VALUES = 'values'
export const ICON_VALUES = 'property'

export const TERM_VARIABLE = 'Variable'
export const TERM_VARIABLES = 'Variables'
export const ROUTE_VARIABLES = `${ROUTE_VALUES}/variables`
export const ICON_VARIABLES = <MxTextIcon text="x" />

export const TERM_CONSTANT = 'Constants'
export const TERM_CONSTANTS = 'Constants'
export const ROUTE_CONSTANTS = `${ROUTE_VALUES}/constants`
export const ICON_CONSTANTS = <MxTextIcon text="π" />

export const TERM_AUTOMATE = 'Automate'
export const ICON_AUTOMATE = 'cog'
export const ROUTE_AUTOMATE = 'automate'

export const TERM_ACTION = 'Action'
export const TERM_ACTIONS = 'Actions'
export const ROUTE_ACTIONS = `${ROUTE_AUTOMATE}/actions`
export const ICON_ACTIONS = 'dot'

export const TERM_WORKFLOW = 'Workflow'
export const TERM_WORKFLOWS = 'Workflows'
export const ROUTE_WORKFLOWS = `${ROUTE_AUTOMATE}/workflows`
export const ICON_WORKFLOWS = 'flows'

export const TERM_TRIGGER = 'Trigger'
export const TERM_TRIGGERS = 'Triggers'
export const ROUTE_TRIGGERS = `${ROUTE_AUTOMATE}/triggers`
export const ICON_TRIGGERS = 'social-media'

export const TERM_ENDPOINT = 'Endpoint'
export const TERM_ENDPOINTS = 'Endpoints'
export const ROUTE_ENDPOINTS = `${ROUTE_AUTOMATE}/endpoints`
export const ICON_ENDPOINTS = 'globe'

export const TERM_APP = 'App'
export const TERM_APPS = 'Apps'

export const DEFAULT_ROUTE = ROUTE_DASHBOARDS;
