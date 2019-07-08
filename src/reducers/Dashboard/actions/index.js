import axios from "axios";
import { 
  callBaseUrl,
  attendedInterviewsUrl, 
  recomendedJobsUrl, 
  companiesShortListedUrl, 
  companiesPlacedUrl 
} from "../../constants";
import { dashboardInitializing,dashboardSetDetails } from './actionCreators'
import { promised } from "q";

export const requestCall = data => async (dispatch, getState) => {
  const response = await axios.get(callBaseUrl(), { userid: 123 });
};

export const fetchDetails = () => async (dispatch,getState) => {
  const header = {
    Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjI0MzUyMDYsIm5iZiI6MTU2MjQzNTIwNiwianRpIjoiNDhiMDk1MzgtZWQzNS00NDM2LTlmNzEtY2YzYmMwZTIxN2IyIiwiZXhwIjoxNTYyNDM2MTA2LCJpZGVudGl0eSI6InBhcml0YWxhc2FuZGVlcGt1bWFyQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.IrP5D-Yh82AoQRJK6KUo-ZBl3-0q7iavIQ7ifO1gIDI',
    'Content-Type': 'application/json',
  }
  const companiesPlaced = {
    status:3
  }
  const companiesShortlistedQuery = {
    status:2
  }
    dispatch(dashboardInitializing(true))
      const {data:attendedInterviewsCount} = await axios.get(attendedInterviewsUrl);
      const {data:recomendedJobsCount} = await axios.get(recomendedJobsUrl);
      const {data: comapniesShortListedCount} = await axios.post(companiesShortListedUrl,companiesShortlistedQuery);
      const { data: companiesPlacedCount} = await axios.post(companiesPlacedUrl,companiesPlaced)
      dispatch(dashboardSetDetails({attendedInterviewsCount,recomendedJobsCount,comapniesShortListedCount,companiesPlacedCount}))
      console.log({attendedInterviewsCount,recomendedJobsCount,comapniesShortListedCount,companiesPlacedCount})
      dispatch(dashboardInitializing(false))
}