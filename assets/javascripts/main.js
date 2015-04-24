$(document).ready(function() {

    $('#download-form').submit(function( event ) {
        event.preventDefault();

        var type = '',
            fileExtension = '',
            fileEnding = '.bin',
            site_code = 'ffki',
            router;
        
        router = $('#download-form-router').val();

        switch ($('#download-form-type').val()) {
            case '0':
                type = 'factory';
                if (router == "netgear-wndr3700" || router == "netgear-wndr3700" || router == "netgear-wndr3800"){
                    fileEnding = '.img'
                }
                break;
            case '1':
                type = 'sysupgrade';
                fileExtension = '-sysupgrade';
                break;
            default:
				alert('error')
        }

            switch ($('#branch').val()) {
                case '0':
                    branchdir = 'stable';
                    vnumber = '0.6';
                    break;
                case '1':
                    branchdir = 'experimental';
                    vnumber = '0.7-exp150420';
                    break;
                default:
                    branchdir = 'stable';
                    vnumber = '0.6';
            }

	if ((router == "netgear-wndr3700" || router == "netgear-wndr3700" || router == "netgear-wndr3800" || 
        router == "buffalo-wzr-hp-ag300h-wzr-600dhp" || router == "buffalo-wzr-hp-g450h" || 
        router == "d-link-dir-615-rev-c1" || router == "gl-inet-6408a-v1" || router == "gl-inet-6416a-v1" || 
        router == "tp-link-tl-mr3220-v2" || router == "tp-link-tl-wa701n-nd-v1" || 
        router == "tp-link-tl-wa860re-v1" || router == "tp-link-tl-wa901n-nd-v3" || 
        router == "tp-link-tl-wr2543n-nd-v1" || router == "tp-link-tl-wr743n-nd-v1" || 
        router == "tp-link-tl-wr743n-nd-v2" || router == "tp-link-tl-wr941n-nd-v5" || 
        router == "ubiquiti-loco-m-xw" || router == "ubiquiti-nanostation-m-xw" || 
        router == "ubiquiti-unifi-ap-pro") && (vnumber == '0.6'))
    {
        window.alert('Der ausgewählte Router ist in dieser Version noch nicht verfügbar!');
    }
	else if(router === '-1') {
        window.alert('Bitte wähle eine Router aus.');
    } else {
        window.location.href = '/firmware/'+branchdir+'/'+type+'/gluon-'+site_code+'-'+vnumber+'-'+router+fileExtension+fileEnding;
    }

        return false;
    });
});
