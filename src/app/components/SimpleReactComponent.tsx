import { Client, createClient, Osdk } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import { BikePathsObj } from "@safebikepathsosdk/sdk";
import React, { useEffect } from "react";

const client_id: string = "f7f193a726e03197fa53559440dbc64e";
const url: string = "https://mermaid.usw-3.palantirfoundry.com";
const ontologyRid: string = "ri.ontology.main.ontology.9a6431a1-71a1-4a2f-a752-945da071a7ff";
const redirectUrl: string = "http://localhost:8090/auth/callback";

const auth = createPublicOauthClient(client_id, url, redirectUrl);
const client: Client = createClient(url, ontologyRid, auth);


export default function SimpleReactComp() {
    const fetchObjects = React.useCallback(async () => {
        try {
            const result = await client(BikePathsObj).fetchPage({ $pageSize: 10 });
            const objectsList = result.data;
            console.log(objectsList);
        } catch (error) {
            console.error("Failed to fetch objects:", error);
        }
    }, []);

    React.useEffect(() => {
        fetchObjects()
        }, [fetchObjects]);
    return <div>See debug code in your console log</div>;
};            