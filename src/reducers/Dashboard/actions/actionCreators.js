import * as types from '../types'

export const dashboardInitializing = status => ({
    type:types.DASHBOARD_INITIALIZING,
    status
})

export const dashboardSetDetails = (data) => ({
    types:types.DASHBOARD_SET_DETAILS,
    data
})