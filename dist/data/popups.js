define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.system = {
        sites: {
            title: "{SiteName}",
            content: "<b>Type: </b>{SiteType}<br>\n                <b>Status: </b>{OperationalStatus}<br>\n                <b>Longitude: </b>{POINT_X}<br>\n                <b>Latitude: </b>{POINT_Y}"
        },
        lines: {
            title: "{LineName}",
            content: "<b>AFE:</b> {AFE}<br>\n                <b>Diameter: </b>{OutsideDiameter}<br>\n                <b>Nominal: </b>{NominalDiameter}<br>\n                <b>Specification: </b>{Specification}<br>\n                <b>Grade: </b>{Grade}<br>\n                <b>Coating: </b>{Coating}<br>\n                <b>MAOP: </b>{MAOP_MOP}<br>\n                <b>Material: </b>{Material}<br>\n                <b>Commodity: </b>{Mixture_Commodity}<br>\n                <b>Status: </b>{OperationalStatus}<br>\n                <b>Operator: </b>{OperatorName}<br>\n                <b>Owner: </b>{Owner}<br>\n                <b>System: </b>{SystemName}<br>\n                <b>Sub-System: </b>{SubSystem}<br>\n                <b>Pipe Usage: </b>{PipeJurisdiction}<br>\n                <b>State: </b>{State}<br>\n                <b>County: </b>{CountyParish}<br>\n                <b>Length(ft): </b>{SegmentLength}"
        }
    };
    exports.acreage = {
        title: "<b>Producer: </b>{Producer}<br>",
        content: "<b>Owner: </b>{Owner}<br>\n            <b>Lease: </b>{Lease_Name}<br>\n            <b>Alias: </b>{Alias}<br>\n            <b>Dedication: </b>{Dedication}<br>\n            <b>Previous Owner: </b>{Previous_Owner}"
    };
    exports.thirdParty = {
        title: "{MAP_LABEL}",
        content: "<b>Operator: </b>{OPERATOR}<br>\n            <b>Owner: </b>{OWNER}<br>\n            <b>System: </b>{SYS_NAME}<br>\n            <b>Diameter: </b>{DIAMETER}<br>\n            <b>System Type: </b>{SYS_TYPE}<br>\n            <b>Interstate: </b>{INTERSTATE}<br>\n            <b>Rate Zone: </b>{RATE_ZONE}<br>\n            <b>Status: </b>{OPER_STAT}<br>\n            <b>State: </b>{STATE}<br>\n            <b>Commodity: </b>{COMMODITY}<br>\n            <b>Flow Direction: </b>{FLOW_DIR}<br>\n            <b>Miles: </b>{MILES}<br>\n            <b>Previous Owner: </b>{PREV_OWNER}<br>"
    };
    exports.formatDate = function (value, key) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var newDate = new Date(value);
        var date = newDate.getUTCDate() + "-" + months[(newDate.getUTCMonth())] + "-" + newDate.getUTCFullYear();
        return date;
    };
    exports.drillingInfo = {
        "Rigs": {
            title: '{lease_name}',
            content: "<b>Operator: </b>{operator_name}<br>\n                <b>API: </b>{api_number}<br>\n                <b>Rig Number: </b>{rig_number}<br>\n                <b>Rig ID: </b>{rig_id}<br>\n                <b>Well Number: </b>{well_number}<br>\n                <b>Draw Works: </b>{draw_works}<br>\n                <b>Rated HP: </b>{rated_hp}<br>\n                <b>Spud Date: </b>{spud_date}<br>\n                <b>Release Date: </b>{release_date}<br>\n                <b>Permit ID: </b>{permit_id}<br>\n                <b>Permit Number: </b>{permit_number}<br>\n                <b>Permit Approval Date: </b>{permit_approval_date:formatDate}<br>\n                <b>Permit Posted Date: </b>{permit_posted_date}<br>\n                <b>Permit Depth: </b>{permit_depth}<br>\n                <b>Commodity: </b>{commodity}<br>\n                <b>Well Purpose: </b>{well_purpose}<br>\n                <b>Well Orientation: </b>{well_orientation}<br>\n                <b>Field: </b>{field_name}<br>\n                <b>Formation: </b>{formation}<br>\n                <b>Formation Depth: </b>{formation_depth}<br>\n                <b>Rated Water Depth: </b>{rated_water_depth}<br>\n                <b>H2S Area: </b>{h2s_area}<br>\n                <b>Operator: </b>{operator_name}<br>\n                <b>Drilling Info Link: </b><a target=\"_blank\" href=\"{diLink}\">More Info</a>\n                "
        },
        "Wells": {
            title: '{well_name}',
            content: "<b>Operator: </b>{current_operator}<br>\n                <b>API: </b>{api_10}<br>\n                <b>Well Number: </b>{well_number}<br>\n                <b>Well ID: </b>{well_id}<br>\n                <b>Status: </b>{well_status}<br>\n                <b>Type: </b>{well_type}<br>\n                <b>Lease Name: </b>{lease_name}<br>\n                <b>WGID: </b>{wgid}<br>\n                <b>Serial Number: </b>{well_serial_number}<br>\n                <b>Spud Date: </b>{spud_date}<br>\n                <b>First Completion Date: </b>{first_completion_date}<br>\n                <b>Total Measured Depth: </b>{total_measured_depth}<br>\n                <b>True Vertical Depth: </b>{true_vertical_depth}<br>\n                <b>Ground Elevation Reported: </b>{ground_elevation_reported}<br>\n                <b>Drilling Info Drill Verified: </b>{di_drill_verified}<br>\n                <b>Longitude: </b>{surface_longitude}<br>\n                <b>Latitude: </b>{surface_latitude}<br>\n                <b>ROW Change Date: </b>{row_change_date}"
        },
        "Production": {
            title: '{lease_name}',
            content: "<b>Production Type: </b>{prod_type}<br>\n                <b>API: </b>{api_uwi}<br>\n                <b>Initial Completion Date: </b>{initial_completion_date}<br>\n                <b>Field: </b>{field}<br>\n                <b>Reservoir: </b>{reservoir}<br>\n                <b>Regulatory Number: </b>{regulatory_number}<br>\n                <b>Well Number: </b>{well_number}<br>\n                <b>Operator: </b>{current_operator}<br>\n                <b>Oil Gatherer: </b>{oil_gatherer}<br>\n                <b>Gas Gatherer: </b>{gas_gatherer}<br>\n                <b>Spud Date: </b>{spud_date}<br>\n                <b>Status: </b>{current_producing_status}<br>\n                <b>IP Gas Daily: </b>{prac_ip_gas_daily}<br>\n                <b>IP BOE: </b>{prac_ip_boe}<br>\n                <b>Wellbore_Orientation: </b>{wellbore_orientation}<br>\n                <b>Total Depth: </b>{total_depth}<br>\n                <b>Daily Gas: </b>{daily_gas}<br>\n                <b>Cumulative Gas: </b>{cum_gas}<br>\n                <b>Peak Gas: </b>{peak_gas}<br>\n                <b>First Month Gas: </b>{first_month_gas}<br>\n                <b>First Year Gas: </b>{first_12_gas}<br>\n                <b>Last Year Gas: </b>{last_12_gas}<br>\n                <b>Daily Oil: </b>{daily_oil}<br>\n                <b>Cumulative Oil: </b>{cum_oil}<br>\n                <b>Peak Oil: </b>{peak_oil}<br>\n                <b>First Month Oil: </b>{first_month_oil}<br>\n                <b>First Year Oil: </b>{first_12_oil}<br>\n                <b>Last Year Oil: </b>{last_12_oil}<br>\n                <b>Cumulative Water: </b>{cum_water}<br>\n                <b>First Month Water: </b>{first_month_water}<br>\n                <b>First Year Water: </b>{first_12_water}<br>\n                <b>Last Year Water: </b>{last_12_water}<br>\n                <b>Latest Flow Pressure: </b>{latest_flow_pressure}<br>\n                <b>First Production Date: </b>{first_prod_date}<br>\n                <b>Last Production Date: </b>{last_prod_date}<br>\n                <b>Basin: </b>{basin}<br>\n                <b>Longitude: </b>{entity_longitude}<br>\n                <b>Latitude: </b>{entity_latitude}<br>"
        },
        "Permits": {
            title: '{lease_name}',
            content: "<b>Permit ID: </b>{permit_id}<br>\n                <b>Well ID: </b>{well_id}<br>\n                <b>API: </b>{api_10}<br>\n                <b>WGID: </b>{wgid}<br>\n                <b>Permit Number: </b>{permit_number}<br>\n                <b>Operator: </b>{operator_alias}<br>\n                <b>Well Number: </b>{well_number}<br>\n                <b>Lease Number: </b>{lease_number}<br>\n                <b>Lease Type: </b>{lease_type}<br>\n                <b>Field: </b>{field}<br>\n                <b>Formation: </b>{formation}<br>\n                <b>Formation Depth: </b>{formation_depth}<br>\n                <b>Permit Type: </b>{permit_type}<br>\n                <b>Well Type: </b>{well_type}<br>\n                <b>Drill Type: </b>{drill_type}<br>\n                <b>Permitted Depth: </b>{permitted_depth}<br>\n                <b>Permit Status: </b>{permit_status}<br>\n                <b>Well Status: </b>{well_status}<br>\n                <b>Submitted Date: </b>{submitted_date}<br>\n                <b>Approved Date: </b>{approved_date}<br>\n                <b>Longitude: </b>{surface_longitude}<br>\n                <b>Latitude: </b>{surface_latitude}"
        }
    };
});
//# sourceMappingURL=popups.js.map