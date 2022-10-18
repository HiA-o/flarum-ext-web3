import app from 'flarum/admin/app';

app.initializers.add('blomstra/web3', () => {
  // TODO: show if ffi extension is installed and is `ffi.enable` ini is true.

  app.extensionData.for('blomstra-web3').registerSetting({
    setting: 'blomstra-web3.prioritize-web3-auth-modals',
    type: 'switch',
    label: app.translator.trans('blomstra-web3.admin.settings.prioritize-web3-auth-modals'),
  });
});
