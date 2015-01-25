
$(document).ready(function() {

    $('#download-form').submit(function( event ) {
        event.preventDefault();

        var type = '',
            fileExtension = '',
            fileEnding = '.bin',
            router;
        
        router = $('#download-form-router').val();

        switch ($('#download-form-type').val()) {
            case '0':
                type = 'factory';
                /* there will be more than a *.bin as a filending
                if (router == 'netgear-wndr3700' || router == 'netgear-wndr3700' || router == 'netgear-wndr3800'){
                    fileEnding = '.img'
                }
                */
                break;
            case '1':
                type = 'sysupgrade';
                fileExtension = '-sysupgrade';
                break;
            default:
                type = 'factory';
        }

        switch ($('#branch').val()) {
            case '0':
                branchdir = 'stable';
                vnumber = '0.6-';
                break;
            case '1':
                branchdir = 'experimental';
                vnumber = '0.6~beta20150104-';
                break;
            default:
                branchdir = 'stable';
                vnumber = '0.6-';
        }

        

        if(router === '-1') {
            window.alert('Bitte wähle eine Router aus.');
        } else {
            window.location.href = '/firmware/'+branchdir+'/'+type+'/gluon-ffki-'+vnumber+router+fileExtension+fileEnding;
        }

        return false;
    });
});
