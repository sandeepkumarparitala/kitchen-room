export const baseUrl = "http://54.185.10.98:5000";

export const interviewListRoute = 'get_list_of_interviews';

export const jobdetailsRoute = 'get_job_seekers_jobs_list';

export const recomendedJobsCountRoutes = 'get_reco_for_job_seeker_id';

export const buildUrl = (route) => `${baseUrl}/${route}`;

export const attendedInterviewsUrl = buildUrl(interviewListRoute);

export const recomendedJobsUrl = buildUrl(recomendedJobsCountRoutes);

export const companiesShortListedUrl = buildUrl(jobdetailsRoute);

export const companiesPlacedUrl = buildUrl(jobdetailsRoute);

export const loginBaseUrl = () => `${baseUrl}/login`;

export const registerBaseUrl = () => `${baseUrl}/register`;

export const callBaseUrl = () => `${baseUrl}/send_interview_call`;

