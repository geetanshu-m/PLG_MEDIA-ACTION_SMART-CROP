# PLG_MEDIA-ACTION_SMART-CROP

Refrence layout for the original integrated plugin.

#### Steps to install

- Clone this repository.
- Copy the path of the plugin.
- Now in the admin-panel for Joomla 4X, go to Extensions->Manage->Install->Install from folder Copy the path of plugin here.
- Now, go to Extensions->Plugin->Smart-Crop, here change the ordering to 1.
- Now, go to Template-><template_name>->index.php add this before html starts.
```
HTMLHelper::_('script', 'media/plg_media-action_smartcrop/responsifyjs/responsify.min.js', ['version' => 'auto', 'relative' => false]);
```