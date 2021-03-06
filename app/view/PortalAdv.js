/*
 * File: app/view/PortalAdv.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('MyApp.view.PortalAdv', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portaladv',

    height: 372,
    width: 800,
    layout: {
        type: 'border'
    },
    title: '首页广告',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    store: 'PortalAdvStore',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        Ext.create('MyApp.view.AdvAdd', { closable: true, title: '新建广告' }).show();


                                    },
                                    disabled: true,
                                    itemId: 'newBtn',
                                    icon: 'data/img/add1.png',
                                    text: '新建'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 10 0 10',
                                    icon: 'data/img/delete1.png',
                                    text: '删除',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    icon: 'data/img/zoom.gif',
                                    text: '查询',
                                    listeners: {
                                        click: {
                                            fn: me.onSearchBtnClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            dataIndex: 'advId',
                            text: 'AdvId'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'advertisingTitle',
                            text: '广告标题',
                            editor: {
                                xtype: 'textfield',
                                name: 'advertisingTitle'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if(value == '1'){
                                    return '头部广告';
                                }else if(value =='2'){
                                    return '中间广告';
                                }else if(value == '3'){
                                    return  '下部广告';
                                }
                            },
                            width: 75,
                            dataIndex: 'advType',
                            text: '广告类型',
                            editor: me.processAdvType({
                                xtype: 'combobox',
                                name: 'advType',
                                allowBlank: false,
                                editable: false,
                                displayField: 'Name',
                                hiddenName: 'advType',
                                valueField: 'Value'
                            })
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if(value == 0){
                                    return null;
                                }else{
                                    return value;
                                }
                            },
                            width: 100,
                            dataIndex: 'shopId',
                            text: '关联店铺',
                            editor: {
                                xtype: 'combobox',
                                width: 200,
                                name: 'shopId',
                                matchFieldWidth: false,
                                displayField: 'shopName',
                                hiddenName: 'shopId',
                                pageSize: 10,
                                store: 'ShopListStore',
                                valueField: 'shopId'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 46,
                            dataIndex: 'power',
                            text: '权值',
                            editor: {
                                xtype: 'numberfield',
                                name: 'power',
                                allowBlank: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 104,
                            dataIndex: 'content',
                            text: '广告体',
                            editor: {
                                xtype: 'textfield',
                                name: 'content'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var max = 1;
                                if(value.length > max ){
                                    metaData.tdAttr = 'data-qtip="<img width=200px height=100px src= '+ value +' />"';
                                }

                                return value.length > max ? value : null;
                            },
                            width: 150,
                            dataIndex: 'pictureUrl',
                            text: '广告图片url'
                        },
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            dataIndex: 'power',
                            text: 'Power'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                                return Number(value.split('(')[1].split(')')[0])>0?Ext.Date.format(new Date(Number(value.split('(')[1].split(')')[0])),'Y-m-d H:i'):null;
                            },
                            width: 120,
                            dataIndex: 'addTime',
                            text: '开始时间'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                                return Number(value.split('(')[1].split(')')[0])>0?Ext.Date.format(new Date(Number(value.split('(')[1].split(')')[0])),'Y-m-d H:i'):null;
                            },
                            width: 120,
                            dataIndex: 'endTime',
                            text: '结束时间'
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {
                            listeners: {
                                edit: {
                                    fn: me.onRowEditingEdit,
                                    scope: me
                                }
                            }
                        })
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processAdvType: function(config) {
        config.store = Ext.create('Ext.data.Store', {
            autoDestroy: true,
            fields: [
            {type: 'string', name: 'Name'},
            {type: 'string', name: 'Value'}
            ],
            data: [
            {"Name":"头部广告","Value":"1"},
            {"Name":"中部广告","Value":"2"},
            {"Name":"下部广告","Value":"3"}]
        });
        return config;
    },

    onButtonClick: function(button, e, eOpts) {
        var grid =  this.down('grid');

        var id = '';
        if(grid.getSelectionModel().selected.length>0){
            grid.getSelectionModel().selected.each(function(item){
                id+= item.get('advId');
            });


            Ext.Ajax.request( {
                url : '/Home/AdvDel',
                method : 'post',
                scope: this,
                params : {
                    id : id
                },
                success : function(response, options) {
                    this.down('grid').getStore().load();
                },
                failure : function() {

                }
            });

        }else{
            Ext.Msg.alert('提示','请选择记录！');
        }
    },

    onSearchBtnClick: function(button, e, eOpts) {
        var store = this.down('grid').getStore();
        store.load({
            callback:function(r, option, success){
                if(success){
                }else{
                    Ext.Msg.alert('错误',option.getError().statusText);
                }

            }});
    },

    onRowEditingEdit: function(editor, context, eOpts) {

        Ext.Ajax.request({     
            url:'/Manage/AdvUpdate',  
            params:context.record.data,  
            scope: this,
            success: function(resp,opts) {   
                var respText = Ext.JSON.decode(resp.responseText);  
                if(respText.success){
                    Ext.Msg.alert('提示','成功');
                    this.down('grid').getStore().load();
                }else{
                    Ext.Msg.alert('提示','失败');
                }

            },   
            failure: function(resp,opts) {   
                Ext.Msg.alert('提示','失败');
            }     
        });
    }

});