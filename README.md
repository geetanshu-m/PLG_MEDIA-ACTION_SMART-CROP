# PLG_MEDIA-ACTION_SMART-CROP

Refrence layout for the original integrated plugin.

#### Steps to install

- Clone this repository.
- Copy the path of the plugin.
- Now in the admin-panel for Joomla 4X, go to Extensions->Manage->Install->Install from folder Copy the path of plugin here.
- Now, go to Extensions->Plugin->Smart-Crop, here change the ordering to 1.
- Now, go to Template-><template_name>->index.php add this before html starts.




#### Dependencies 

Along with this plugin one needs to install
- Adaptive Image content plugin
-- Plugin which parse the focus point into the front end.
- Adaptive Image controller
-- Controller which gets and sets the focus point into backend.
in order to make it functional.
- Focus Store Class
-- It consist of the methods to store the data focus points.
