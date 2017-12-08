var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: 'Granite Hill',
        image: 'http://fondulacpark.com/wp-content/uploads/2013/12/campground-pic-1.jpg',
        description: 'blablabla'
    },
    {
        name: 'Ventana Campground',
        image: 'http://www.big-sur-lodging.com/Big-Sur-California-Visitor-Guide/Outdoor-Activities/Coast-Campgrounds-Photos/Ventana_Campground_Campsite_Campers-6-1024x647.jpg',
        description: 'blablabla'
    },
    {
        name: 'Desert Mesa',
        image: 'http://21zfbaky162t2fou2u3pmsri4.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/20121023_151802.jpg',
        description: 'blablabla'
    },
    {
        name: 'Canyon Floor',
        image: 'http://cbsdenver.files.wordpress.com/2011/07/campground.jpg',
        description: 'blablabla'
    },
]
function seedDB() {
    Campground.remove({}, (err) => {
        if(err) console.log(err)
        else{
            console.log('removed campgrounds')
            data.forEach((seed) => {

                Campground.create({
                    name: seed.name,
                    image: seed.image,
                    description: seed.description
                }, (err, campground) => {
                    if(err) console.log(err);
                    else{
                        console.log('added a campground');
                        Comment.create({
                            text: 'This place is great, but I wish there was internet',
                            author: 'homer'
                        }, (err, comment) => {
                            if(err) console.log(err);
                            else{
                                campground.comments.push(comment);
                                campground.save()
                                console.log('added a comment')
                            }
                        })
                    }
                })
            })
        }
    })
}



module.exports = seedDB;
