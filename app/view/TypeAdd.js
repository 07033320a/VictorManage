/*
 * File: app/view/TypeAdd.js
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

Ext.define('MyApp.view.TypeAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.typeadd',

    height: 232,
    width: 374,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: '新增类型',
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
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: '父类型',
                            name: 'fatherId',
                            allowBlank: false,
                            emptyText: '请选择',
                            editable: false,
                            displayField: 'typeName',
                            hiddenName: 'fatherId',
                            store: 'TypeFatherStore',
                            valueField: 'typeId'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '分类名称',
                            name: 'typeName',
                            allowBlank: false
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: '广告体',
                            name: 'note',
                            enforceMaxLength: true,
                            maxLength: 300
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
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'typeId'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'newOrUpdate',
                            value: 1
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
        var url = "/Manage/TypeAdd";
        if(values.typeId != null){
            url = "/Manage/TypeUpdate";
        }
        if(form.isValid()){
            form.submit({
                url:url,
                params: values,
                method:'POST',
                scope: this,
                success:function(f,action) {
                    Ext.Msg.alert('提示:','成功');
                    this.close();
                    Ext.ComponentQuery.query('typemanagement grid')[0].getStore().load();
                },
                failure:function(f,action){
                    Ext.Msg.alert(f,action);
                }
            });
        }

    }

});