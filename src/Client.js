import client from "@sanity/client"

export default client({
    projectId:"gz1p1grm",
    dataset: "production",
    useCdn: true,
    apiVersion:"2022-02-20"
})