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
                <b>Length(ft): </b>{SegmentLength}<br>
                <b>Documents: </b><a href="` + "https://lucidenergyllc.sharepoint.com" + `{JobBookURL}" target="_blank">Documents</a>`
    }
};

export const row = {
    title: "{TractName}",
    content: `<b>Documents: </b>{Hyperlink_ROW}`
}

export const meters = {
    title: `{Meter_Name}`,
    content: `<b>Meter Number: </b>{Meter__}<br>
            <b>Area: </b>{Area}<br>
            <b>Lateral: </b>{Lateral}<br>
            <b>Sub Lateral: </b>{Sub_Lateral}<br>
            <b>Producer: </b>{Producer}<br>
            <b>Pipe Diameter: </b>{Pipe_Diameter}<br>
            <b>Orifice Diameter: </b>{Orifice_Diameter}<br>
            <b>Flow Rate: </b>{FlowRate}<br>
            <b>Actual Pressure: </b>{AP}<br>
            <b>Differential Pressure: </b>{DP}<br>
            <b>Previous Day Volume: </b>{Prev_Day_Vol}<br>
            <b>Max Monthly Volume: </b>{Max_24_Month_Vol}<br>
            <b>Previous Day AP: </b>{Prev_Day_AP}<br>
            <b>Previous Day DP: </b>{Prev_Day_DP}<br>
            <b>Latitude: </b>{Latitude}<br>
            <b>Longitude: </b>{Longitude}`
}

export const acreage = {
    title: `<b>Producer: </b>{Producer}<br>`,
    content: `<b>Lease Name: </b>{Lease_Name}<br>
            <b>Alias: </b> {Alias}<br>
            <b>Dedication: </b>{Dedication}<br>
            <b>Dedication Type: </b>{DedicationType}<br>
            <b>Contract: </b>{Contract}<br>
            <b>Effective Date: </b>{EffectiveDate}<br>
            <b>Expiration Date: </b>{ExpirationDate}<br>
            <b>Term Status: </b>{TermStatus}<br>
            <b>Sweet_Sour: </b>{Sweet_Sour}<br>
            <b>HP_LP: </b>{HP_LP}`
};

export const thirdParty = {
    title: `{NAME}`,
    content: `<b>Operator: </b>{OPERATOR}<br>
            <b>Owner: </b>{OWNER}<br>
            <b>System: </b>{SYS_NAME}<br>
            <b>Diameter: </b>{DIAMETER}<br>
            <b>Type: </b>{TYPE}<br>
            <b>Interstate: </b>{INTERSTATE}<br>
            <b>Status: </b>{STATUS}<br>
            <b>Commodity: </b>{COMMODITY}<br>`
}

export const drillingInfo = {
    "Rigs": {
        title: '{lease_name}',
        content: `<b>Operator: </b>{operator_name}<br>
                <b>API: </b>{api_number}<br>
                <b>Rig Number: </b>{rig_number}<br>
                <b>Rig ID: </b>{rig_id}<br>
                <b>Well Number: </b>{well_number}<br>
                <b>Draw Works: </b>{draw_works}<br>
                <b>Rated HP: </b>{rated_hp}<br>
                <b>Spud Date: </b>{spud_date}<br>
                <b>Release Date: </b>{release_date}<br>
                <b>Permit ID: </b>{permit_id}<br>
                <b>Permit Number: </b>{permit_number}<br>
                <b>Permit Approval Date: </b>{permit_approval_date:formatDate}<br>
                <b>Permit Posted Date: </b>{permit_posted_date}<br>
                <b>Permit Depth: </b>{permit_depth}<br>
                <b>Commodity: </b>{commodity}<br>
                <b>Well Purpose: </b>{well_purpose}<br>
                <b>Well Orientation: </b>{well_orientation}<br>
                <b>Field: </b>{field_name}<br>
                <b>Formation: </b>{formation}<br>
                <b>Formation Depth: </b>{formation_depth}<br>
                <b>Rated Water Depth: </b>{rated_water_depth}<br>
                <b>H2S Area: </b>{h2s_area}<br>
                <b>Operator: </b>{operator_name}<br>
                <b>Drilling Info Link: </b><a target="_blank" href="{diLink}">More Info</a>
                `
    },
    "Wells": {
        title: '{well_name}',
        content: `<b>Operator: </b>{current_operator}<br>
                <b>API: </b>{api_10}<br>
                <b>Well Number: </b>{well_number}<br>
                <b>Well ID: </b>{well_id}<br>
                <b>Status: </b>{well_status}<br>
                <b>Type: </b>{well_type}<br>
                <b>Lease Name: </b>{lease_name}<br>
                <b>WGID: </b>{wgid}<br>
                <b>Serial Number: </b>{well_serial_number}<br>
                <b>Spud Date: </b>{spud_date}<br>
                <b>First Completion Date: </b>{first_completion_date}<br>
                <b>Total Measured Depth: </b>{total_measured_depth}<br>
                <b>True Vertical Depth: </b>{true_vertical_depth}<br>
                <b>Ground Elevation Reported: </b>{ground_elevation_reported}<br>
                <b>Drilling Info Drill Verified: </b>{di_drill_verified}<br>
                <b>Longitude: </b>{surface_longitude}<br>
                <b>Latitude: </b>{surface_latitude}<br>
                <b>ROW Change Date: </b>{row_change_date}`
    },
    "Production": {
        title: '{lease_name}',
        content: `<b>Production Type: </b>{prod_type}<br>
                <b>API: </b>{api_uwi}<br>
                <b>Initial Completion Date: </b>{initial_completion_date}<br>
                <b>Field: </b>{field}<br>
                <b>Reservoir: </b>{reservoir}<br>
                <b>Regulatory Number: </b>{regulatory_number}<br>
                <b>Well Number: </b>{well_number}<br>
                <b>Operator: </b>{current_operator}<br>
                <b>Oil Gatherer: </b>{oil_gatherer}<br>
                <b>Gas Gatherer: </b>{gas_gatherer}<br>
                <b>Spud Date: </b>{spud_date}<br>
                <b>Status: </b>{current_producing_status}<br>
                <b>IP Gas Daily: </b>{prac_ip_gas_daily}<br>
                <b>IP BOE: </b>{prac_ip_boe}<br>
                <b>Wellbore_Orientation: </b>{wellbore_orientation}<br>
                <b>Total Depth: </b>{total_depth}<br>
                <b>Daily Gas: </b>{daily_gas}<br>
                <b>Cumulative Gas: </b>{cum_gas}<br>
                <b>Peak Gas: </b>{peak_gas}<br>
                <b>First Month Gas: </b>{first_month_gas}<br>
                <b>First Year Gas: </b>{first_12_gas}<br>
                <b>Last Year Gas: </b>{last_12_gas}<br>
                <b>Daily Oil: </b>{daily_oil}<br>
                <b>Cumulative Oil: </b>{cum_oil}<br>
                <b>Peak Oil: </b>{peak_oil}<br>
                <b>First Month Oil: </b>{first_month_oil}<br>
                <b>First Year Oil: </b>{first_12_oil}<br>
                <b>Last Year Oil: </b>{last_12_oil}<br>
                <b>Cumulative Water: </b>{cum_water}<br>
                <b>First Month Water: </b>{first_month_water}<br>
                <b>First Year Water: </b>{first_12_water}<br>
                <b>Last Year Water: </b>{last_12_water}<br>
                <b>Latest Flow Pressure: </b>{latest_flow_pressure}<br>
                <b>First Production Date: </b>{first_prod_date}<br>
                <b>Last Production Date: </b>{last_prod_date}<br>
                <b>Basin: </b>{basin}<br>
                <b>Longitude: </b>{entity_longitude}<br>
                <b>Latitude: </b>{entity_latitude}<br>`
    },
    "Permits": {
        title: '{lease_name}',
        content: `<b>Permit ID: </b>{permit_id}<br>
                <b>Well ID: </b>{well_id}<br>
                <b>API: </b>{api_10}<br>
                <b>WGID: </b>{wgid}<br>
                <b>Permit Number: </b>{permit_number}<br>
                <b>Operator: </b>{operator_alias}<br>
                <b>Well Number: </b>{well_number}<br>
                <b>Lease Number: </b>{lease_number}<br>
                <b>Lease Type: </b>{lease_type}<br>
                <b>Field: </b>{field}<br>
                <b>Formation: </b>{formation}<br>
                <b>Formation Depth: </b>{formation_depth}<br>
                <b>Permit Type: </b>{permit_type}<br>
                <b>Well Type: </b>{well_type}<br>
                <b>Drill Type: </b>{drill_type}<br>
                <b>Permitted Depth: </b>{permitted_depth}<br>
                <b>Permit Status: </b>{permit_status}<br>
                <b>Well Status: </b>{well_status}<br>
                <b>Submitted Date: </b>{submitted_date}<br>
                <b>Approved Date: </b>{approved_date}<br>
                <b>Longitude: </b>{surface_longitude}<br>
                <b>Latitude: </b>{surface_latitude}`
    }
}

export const blm = {
    2: {
        title: '{Name}',
        content: '<b>Rank:</b> {HabitatPotential_Rank}'
    },
    3: {
        title: 'Dunes Sage Brush Lizard Habitat'
    },
    4: {
        title: 'Lesser Prairie Chicken Habitat',
        content: '<b> Description: </b>{DESCRIPTION}'
    }
}

export const documentPoint= {
    title: "{DPName}",
    content: '<b>Job Book: </b><a href="{EditNotes}{Remarks}" target="_blank">Click to View</a>'
}
