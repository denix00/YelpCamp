var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {   name: "Cloud's Rest", 
        image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu ac tellus congue mattis vitae vitae justo. Morbi faucibus enim non ligula pharetra, ut sodales justo imperdiet. Phasellus eget sollicitudin ipsum, at finibus leo. Nullam placerat fermentum massa in rutrum. Quisque suscipit finibus tellus, a ornare arcu ullamcorper eget. Quisque id augue nibh. In et sollicitudin justo. Curabitur lobortis velit vitae malesuada vestibulum. Duis dictum fermentum fermentum. Pellentesque scelerisque gravida felis sed viverra. Nam scelerisque feugiat urna sit amet iaculis. Aliquam erat volutpat. Etiam scelerisque molestie dui, vitae accumsan ex mattis sed.Sed vitae sapien non tellus dictum placerat eu non tortor. Vivamus vulputate quam mi, in ornare dolor tristique eget. Mauris at justo purus. Nam sagittis accumsan nisl a dictum. Integer pellentesque vitae velit sit amet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ullamcorper nisi non odio aliquam, sit amet condimentum nisi molestie. Etiam blandit, eros vitae ultricies congue, lacus lacus ornare leo, vel vulputate ipsum velit nec magna."
    },
    {   name: "Desert Mesa", 
        image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu ac tellus congue mattis vitae vitae justo. Morbi faucibus enim non ligula pharetra, ut sodales justo imperdiet. Phasellus eget sollicitudin ipsum, at finibus leo. Nullam placerat fermentum massa in rutrum. Quisque suscipit finibus tellus, a ornare arcu ullamcorper eget. Quisque id augue nibh. In et sollicitudin justo. Curabitur lobortis velit vitae malesuada vestibulum. Duis dictum fermentum fermentum. Pellentesque scelerisque gravida felis sed viverra. Nam scelerisque feugiat urna sit amet iaculis. Aliquam erat volutpat. Etiam scelerisque molestie dui, vitae accumsan ex mattis sed.Sed vitae sapien non tellus dictum placerat eu non tortor. Vivamus vulputate quam mi, in ornare dolor tristique eget. Mauris at justo purus. Nam sagittis accumsan nisl a dictum. Integer pellentesque vitae velit sit amet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ullamcorper nisi non odio aliquam, sit amet condimentum nisi molestie. Etiam blandit, eros vitae ultricies congue, lacus lacus ornare leo, vel vulputate ipsum velit nec magna."
    },
    {   name: "Canyon Floor", 
        image: "https://farm8.staticflickr.com/7503/15623542806_8058899c7d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu ac tellus congue mattis vitae vitae justo. Morbi faucibus enim non ligula pharetra, ut sodales justo imperdiet. Phasellus eget sollicitudin ipsum, at finibus leo. Nullam placerat fermentum massa in rutrum. Quisque suscipit finibus tellus, a ornare arcu ullamcorper eget. Quisque id augue nibh. In et sollicitudin justo. Curabitur lobortis velit vitae malesuada vestibulum. Duis dictum fermentum fermentum. Pellentesque scelerisque gravida felis sed viverra. Nam scelerisque feugiat urna sit amet iaculis. Aliquam erat volutpat. Etiam scelerisque molestie dui, vitae accumsan ex mattis sed.Sed vitae sapien non tellus dictum placerat eu non tortor. Vivamus vulputate quam mi, in ornare dolor tristique eget. Mauris at justo purus. Nam sagittis accumsan nisl a dictum. Integer pellentesque vitae velit sit amet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ullamcorper nisi non odio aliquam, sit amet condimentum nisi molestie. Etiam blandit, eros vitae ultricies congue, lacus lacus ornare leo, vel vulputate ipsum velit nec magna."
    }
]


function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
         if(err){
            console.log(err);
        }else{
            console.log("removed campgrounds");
            // add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("added a campground");
                        
                        //create a comment
                        Comment.create(
                            {
                                text: "this place is great",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                }else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            });
                    }
                });
            });
            
        }
    });
}

module.exports = seedDB;
