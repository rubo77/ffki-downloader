
$(document).ready(function() {

    $('#download-form').submit(function( event ) {
        event.preventDefault();

        var type = '',
            fileExtension = '',
            fileEnding = '.bin',
            router;

        switch ($('#download-form-type').val()) {
            case '0':
                type = 'factory';

                

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
                vnumber = '0.5.1-';
                break;
            case '1':
                branchdir = 'experimental';
                vnumber = '0.6~beta20150104-';
                break;
            default:
                branchdir = 'stable';
                vnumber = '0.5.1-';
        }

        router = $('#download-form-router').val();

        if(router === '-1') {
            window.alert('Bitte wähle eine Router aus.');
        } else {
            window.location.href = '/firmware/'+branchdir+'/'+type+'/gluon-ffki-'+vnumber+router+fileExtension+fileEnding;
        }

        return false;
    });
});
