'use client'

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookCallPopup() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "talk-to-me" });
            cal("floatingButton", { "calLink": "thiagond/talk-to-me", "config": { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }, "buttonColor": "#292929", "buttonTextColor": "#fafafa", "buttonText": "Talk to Me" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return <></>
};
