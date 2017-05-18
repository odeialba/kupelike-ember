import Ember from 'ember';

export default Ember.Component.extend({
    /* global CanvasJS */
    didInsertElement:function(){
        var item = this.get('item');
        var kupelaid = item.get('id');
        var kupelalikes = item.get('votes_count');
        //var hombres2 = 0;
        // var statistics = item.get('statistics');
        var kupelah = item.get('statistics').males;
        var kupelam = item.get('statistics').females;

        // var chart = [];
        // var chart2 = [];
        var anonimous;
        anonimous = kupelalikes - kupelam - kupelah;
        var chart = new CanvasJS.Chart("chartContainer-"+kupelaid, {
            theme: "theme2",//theme1
            //width: 350,
            title:{
                text: "Likes a la kupela por GENERO"              
            },
            animationEnabled: false,   // change to true
            data: [              
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "pie",
                dataPoints: [
                    
                    { y: kupelam, label: "Women" },
                    { y: kupelah, label: "Men" },
                    { y: anonimous, label: "Anonimous" }
                    
                ]
            }
            ]
        });
        chart.render();
    }
});
