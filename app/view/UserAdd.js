/*
 * File: app/view/UserAdd.js
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

Ext.define('MyApp.view.UserAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.useradd',

    height: 340,
    width: 448,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: '新增用户',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '登录名',
                            name: 'username'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '密码',
                            name: 'password'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '真实姓名',
                            name: 'cnName'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: '类型',
                            name: 'type',
                            hiddenName: 'type',
                            store: [
                                [
                                    '',
                                    ''
                                ],
                                [
                                    '1',
                                    '普通用户'
                                ],
                                [
                                    '2',
                                    '会员'
                                ],
                                [
                                    '9',
                                    '管理员'
                                ]
                            ]
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '邮箱',
                            name: 'email',
                            vtype: 'email'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '电话',
                            name: 'mobilephone'
                        },
                        {
                            xtype: 'filefield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: '头像',
                            name: 'picUrl'
                        },
                        {
                            xtype: 'button',
                            icon: 'data/img/save.gif',
                            text: '确认',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 20',
                            icon: 'data/img/reset.gif',
                            text: '重置',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick1,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
        var form = this.down('form').getForm();
        var values = form.getValues();
        form.submit({
            url:"/User/UserAdd",
            params: values,
            method:'POST',
            scope: this,
            success:function(f,action) {
                Ext.Msg.alert('提示:','成功');
                this.close();
                Ext.ComponentQuery.query('userlist grid')[0].getStore().load();
            },
            failure:function(f,action){
                Ext.Msg.alert(f,action);
            }
        });

    },

    onButtonClick1: function(button, e, eOpts) {
        this.down('form').getForm().reset();
    }

});