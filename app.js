/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    models: [
        'MenuModel',
        'HomeIcon',
        'CarData',
        'CarChart',
        'PPTData',
        'cResultV',
        'UserListDto'
    ],
    stores: [
        'HomeIcomStore',
        'CarData',
        'CarChartStore',
        'gridStore',
        'cResultVStore',
        'UserList',
        'MenuStore'
    ],
    views: [
        'MyViewport',
        'HomePanel',
        'TestList',
        'SearchPanel',
        'ChartPanel',
        'UserManagement',
        'UserAdd',
        'RoyaltyCard'
    ],
    controllers: [
        'FrameController'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.MyViewport');
        Ext.Ajax.request({
            url: 'http://localhost:8070/testAjax.svc/HelloWorld',

            params: { id: 10 },
            method: 'GET',
            success: function (response, options) {
                                                   Ext.MessageBox.alert('成功', '从服务端获取结果: ' + response.responseText);
                                                  },
            failure: function (response, options) {
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        });
    }

});
