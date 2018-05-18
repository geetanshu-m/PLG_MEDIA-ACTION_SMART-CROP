/**
 * @copyright  Copyright (C) 2005 - 2018 Open Source Matters, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */
Joomla = window.Joomla || {};

Joomla.MediaManager = Joomla.MediaManager || {};
Joomla.MediaManager.Edit = Joomla.MediaManager.Edit || {};

(function () {
	"use strict";
    var initSmartCrop = function (mediaData) {
        var image = document.getElementById('image-preview');
		// Initiate the cropper
		Joomla.MediaManager.Edit.smartcrop = new Cropper(image, {
			viewMode: 1,
			responsive: false,
			restore: true,
			autoCrop: false,
			movable: true,
			zoomable: false,
			rotatable: false,
			autoCropArea: 0,
			minContainerWidth: image.offsetWidth,
			minContainerHeight: image.offsetHeight,
			crop: function (e) {
                var canvas_data = this.cropper.getCropBoxData();
                var top = canvas_data.top / image.naturalHeight;
                var bottom = (canvas_data.height + canvas_data.top) / image.naturalHeight;
                var left = canvas_data.left / image.naturalWidth;
                var right = (canvas_data.width + canvas_data.left) / image.naturalWidth;
				document.getElementById('jform_data_focus_top').value = top.toFixed(2);
				document.getElementById('jform_data_focus_bottom').value = bottom.toFixed(2);
				document.getElementById('jform_data_focus_left').value = left.toFixed(2);
				document.getElementById('jform_data_focus_right').value = right.toFixed(2);

				var format = Joomla.MediaManager.Edit.original.extension === 'jpg' ? 'jpeg' : Joomla.MediaManager.Edit.original.extension;

				var quality = document.getElementById('jform_crop_quality').value;
			}
        });
    }

    // Register the Events
	Joomla.MediaManager.Edit.smartcrop = {
		Activate: function (mediaData) {
			// Initialize
			initSmartCrop(mediaData);
		},
		Deactivate: function () {
            if (!Joomla.MediaManager.Edit.smartcrop.cropper) {
				return;
			}
			// Destroy the instance
			Joomla.MediaManager.Edit.smartcrop.cropper.destroy();
		}
	};
})();