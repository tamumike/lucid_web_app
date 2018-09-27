export const system = {
    sites: {
        title: `{SiteName}`,
        content: `<b>Type: </b>{SiteType}<br>
                <b>Status: </b>{OperationalStatus}<br>
                <b>Longitude: </b>{POINT_X}<br>
                <b>Latitude: </b>{POINT_Y}`
    },
    lines: {
        title: `{LineName}`,
        content: `<b>AFE:</b> {AFE}<br>
                <b>Diameter: </b>{OutsideDiameter}<br>
                <b>Nominal: </b>{NominalDiameter}<br>
                <b>Specification: </b>{Specification}<br>
                <b>Grade: </b>{Grade}<br>
                <b>Coating: </b>{Coating}<br>
                <b>MAOP: </b>{MAOP_MOP}<br>
                <b>Material: </b>{Material}<br>
                <b>Commodity: </b>{Mixture_Commodity}<br>
                <b>Status: </b>{OperationalStatus}<br>
                <b>Operator: </b>{OperatorName}<br>
                <b>Owner: </b>{Owner}<br>
                <b>System: </b>{SystemName}<br>
                <b>Sub-System: </b>{SubSystem}<br>
                <b>Pipe Usage: </b>{PipeJurisdiction}<br>
                <b>State: </b>{State}<br>
                <b>County: </b>{CountyParish}<br>
                <b>Length(ft): </b>{SegmentLength}`
    }
};

export const acreage = {
    title: `<b>Producer: </b>{Producer}<br>`,
    content: `<b>Owner: </b>{Owner}<br>
            <b>Lease: </b>{Lease_Name}<br>
            <b>Alias: </b>{Alias}<br>
            <b>Dedication: </b>{Dedication}<br>
            <b>Previous Owner: </b>{Previous_Owner}`
};

export const thirdParty = {
    title: `{MAP_LABEL}`,
    content: `<b>Operator: </b>{OPERATOR}<br>
            <b>Owner: </b>{OWNER}<br>
            <b>System: </b>{SYS_NAME}<br>
            <b>Diameter: </b>{DIAMETER}<br>
            <b>System Type: </b>{SYS_TYPE}<br>
            <b>Interstate: </b>{INTERSTATE}<br>
            <b>Rate Zone: </b>{RATE_ZONE}<br>
            <b>Status: </b>{OPER_STAT}<br>
            <b>State: </b>{STATE}<br>
            <b>Commodity: </b>{COMMODITY}<br>
            <b>Flow Direction: </b>{FLOW_DIR}<br>
            <b>Miles: </b>{MILES}<br>
            <b>Previous Owner: </b>{PREV_OWNER}<br>`
}