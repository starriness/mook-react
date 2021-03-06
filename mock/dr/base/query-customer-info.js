module.exports = function (req, res) {
    this.set("Content-Type", "application/json");
    var _random = Math.round(Math.random() * 10);
    var customerId = (this.request.query.customerId) ? this.request.query.customerId : "---";
    var _now = new Date().toLocaleTimeString();
    var data = {
        regInfoSrc: customerId + "###" + _now,
        regEntSrc: "公司五周年活动" + _random,
        clientName: "史密斯赵",
        gender: "1",
        mobile: "13800138000",
        mobileArea: "中国北京天安门",
        email: "123@456.com",
        birthplace: "中国大陆",
        certType: "1",
        certNumber: "123456789",
        birthday: "2016-01-01",
        tag: "有钱,任性",
        assignedManager: "经理1",
        plannedRevisitTime: "2016-02-02",
        lastOutgoingNumber: "123456",
        lastOutgoingStatus: "1",
        lastOutgoingTime: "2016-01-07",
            siteUrl: "CRM_0_a1_b2_c3",
        saleStage: "1",
        clientType: "1",
        clientGrade: "2",
        clientStatus: "1",
        isDangerous: "0",
        isWaitShared: "1",
        isManualAdd: "是",
        isOverride: "否",
        lastSimlateTime: "2016-02-02",
        isOvertrade: "是",
        riskNoticeType: "1",
        resetPwMemo: "申请密码重置记录申请密码重置记录申请密码重置记录",
        closeAccountMemo: "销户记录销户记录销户记录销户记录销户记录销户记录",
        complaintsMemo: "投诉记录投诉记录投诉记录投诉记录投诉记录",
        lastRevisitContent: "最近回访内容最近回访内容最近回访内容最近回访内容最近回访内容",
        sharedTotal: "累计共享客户次数累计共享客户次数累计共享客户次数累计共享客户次数",
        lastSharedMemo: "最近共享原因最近共享原因最近共享原因最近共享原因",
        lastSharedTime: "2016-01-11 10:00:12",
        lastAutoAssignTime: "2016-01-15 10:00:12",
        updateTime: "2016-05-01 10:00:12",
        createTime: "2016-06-11 10:00:12",
        lockedCustomerInfo: [
            {customerId:"id0", clientName: "name1", isLock: 3}, 
            {customerId:"id1", clientName: "name2", isLock: 4},
            {customerId:"id2", clientName: "name3", isLock: 3}],
    };
    var data2 = {success: 1, value: data};
    this.response.body = JSON.stringify(data2);
}