/*
 * File: app/view/RecShop.js
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

Ext.define('MyApp.view.RecShop', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.recshop',

    height: 372,
    layout: {
        type: 'fit'
    },
    title: '推荐商铺管理',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'form',
                    dock: 'top',
                    layout: {
                        type: 'column'
                    },
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            margin: '0 10 10 0',
                            fieldLabel: '商铺名称',
                            labelAlign: 'right',
                            name: 'shopName'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 10 10 0',
                            fieldLabel: '用户名',
                            labelAlign: 'right',
                            name: 'userId'
                        },
                        {
                            xtype: 'container',
                            margin: '0 0 0 30',
                            layout: {
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '0 10 10 30',
                                    icon: 'data/img/zoom.gif',
                                    text: '查询',
                                    listeners: {
                                        click: {
                                            fn: me.onSearchBtnClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        this.up('form').getForm().reset();
                                    },
                                    margin: '0 10 10 30',
                                    icon: 'data/img/reset.gif',
                                    text: '重置'
                                }
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'border'
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            region: 'center',
                            title: '',
                            store: 'RecShopStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'id',
                                    text: 'id'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'shopId',
                                    text: 'ShopId'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 134,
                                    dataIndex: 'shopName',
                                    text: '商铺名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        if(value == '1'){
                                            return '胜利特价';
                                        }else if(value == '2'){
                                            return '新店推荐';
                                        }else if(value == '3'){
                                            return '会员商家';
                                        }else if(value == '4'){
                                            return '品牌推荐';
                                        }
                                    },
                                    width: 134,
                                    dataIndex: 'type',
                                    text: '商铺类型'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        var max = 10;
                                        if(value && value.length > max ){
                                            metaData.tdAttr = 'data-qtip='+ value +'';
                                        }

                                        return value;
                                    },
                                    width: 216,
                                    dataIndex: 'introduction',
                                    text: '商铺介绍'
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
                                    width: 129,
                                    dataIndex: 'picurl',
                                    text: '商铺图片'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'attention',
                                    text: '关注度'
                                },
                                {
                                    xtype: 'actioncolumn',
                                    width: 46,
                                    items: [
                                        {
                                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                var grid =  this.down('grid');

                                                var id = record.data['id'];

                                                Ext.Ajax.request( {
                                                    url : '/Shop/RecShopDel',
                                                    method : 'post',
                                                    scope: this,
                                                    params : {
                                                        id : id
                                                    },
                                                    success : function(response, options) {
                                                        this.up('grid').getStore().load();
                                                    },
                                                    failure : function() {
                                                        Ext.Msg.alert('提示','失败');
                                                    }
                                                });


                                            },
                                            icon: 'data/img/delete2.gif',
                                            tooltip: '删除'
                                        },
                                        {
                                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                var datagridPanel;
                                                datagridPanel = MyApp.getApplication().getController("ShopController").getRecshopadd();
                                                if (!datagridPanel) {
                                                    datagridPanel= Ext.create('MyApp.view.RecShopAdd', { closable: true, title: '修改推荐商铺' }).show();
                                                    var form = datagridPanel.down('form').getForm();
                                                    form.setValues(record.raw);

                                                }
                                            },
                                            icon: 'data/img/forward.png',
                                            tooltip: '修改'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'toolbar',
                            flex: 0,
                            region: 'south',
                            items: [
                                {
                                    xtype: 'label',
                                    padding: '0 0 0 5',
                                    text: '推荐商铺'
                                },
                                {
                                    xtype: 'splitter'
                                },
                                {
                                    xtype: 'combobox',
                                    width: 322,
                                    fieldLabel: '店铺',
                                    labelAlign: 'right',
                                    labelWidth: 90,
                                    name: 'shopId',
                                    emptyText: '          < - - 请选择 - - >',
                                    editable: false,
                                    displayField: 'shopName',
                                    hiddenName: 'shopId',
                                    pageSize: 10,
                                    store: 'RecShopAddListStore',
                                    valueField: 'shopId',
                                    valueNotFoundText: '未找到值'
                                },
                                {
                                    xtype: 'combobox',
                                    width: 300,
                                    fieldLabel: '类型',
                                    labelAlign: 'right',
                                    labelWidth: 90,
                                    name: 'type',
                                    emptyText: '          < - - 请选择 - - >',
                                    editable: false,
                                    displayField: 'shopName',
                                    hiddenName: 'type',
                                    pageSize: 10,
                                    store: [
                                        [
                                            '1',
                                            '胜利特价'
                                        ],
                                        [
                                            '2',
                                            '新店推荐'
                                        ],
                                        [
                                            '3',
                                            '会员商家'
                                        ],
                                        [
                                            '4',
                                            '品牌推荐'
                                        ]
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    margin: '0 0 0 10',
                                    width: 53,
                                    icon: 'data/img/add1.png',
                                    text: '添加',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onSearchBtnClick: function(button, e, eOpts) {
        var values = this.down('form').getForm().getValues();
        var store = this.down('grid').getStore();
        store.getProxy().extraParams = values;
        store.load({
            callback:function(r, option, success){
                if(success){

                }else{
                    Ext.Msg.alert('错误',option.getError().statusText);
                }

            }});
    },

    onButtonClick: function(button, e, eOpts) {
        var shopid = this.down('[name=shopId]').getValue();
        var type = this.down('[name=type]').getValue();
        if(shopid && type){
            Ext.Ajax.request({     
                url:'/Shop/RecShopListAdd',  
                params:{  
                    shopId:  shopid,type:type
                },  
                scope: this,
                success: function(resp,opts) {   
                    var respText = Ext.JSON.decode(resp.responseText);  
                    if(respText.success){
                        Ext.Msg.alert('提示','成功');
                        this.down('[name=type]').reset();
                        this.down('[name=shopId]').reset();
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

    }

});