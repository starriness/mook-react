import reqwest from 'reqwest';
import {UtilFlux,JsonResult} from './../../libs/ui-core';
const flux = UtilFlux.createFlux({});
flux.actions = {
    refreshTable() {
        flux.execute("refresh");
    },
    refreshTableRow(rowId, colorFlag) {
        flux.execute("refreshRow", null, rowId, colorFlag);
    },
    rowSelectionChanged(selectedIds) {
        flux.execute("rowSelectionChanged", null, selectedIds);
    },
    list(params = {}, successHandler, errorHandler, completeHandler) {
        reqwest({
            url: window.prefix + '/crm_customer_assigned_managers/list-his',
            method: 'post',
            data: params,
            type: 'json',
            success: (resp) => JsonResult.value(resp, successHandler, errorHandler),
            error: (resp) => JsonResult.value(resp, successHandler, errorHandler),
            complete: completeHandler,
        });
    },
};
export default flux;
