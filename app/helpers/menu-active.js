import Ember from 'ember';

export function menuActive(params/*, hash*/) {
//   return params;
// console.log(hash);
  // console.log(params);
  var url = window.location.pathname;
  // console.log(url);
    if (url.indexOf(params[0]) > -1){
        return "menu-links-active";
        // return {{#link-to params[0] class='menu-links-active'}}+"<li>"+params[1]+"</li>"+{{/link-to}};
        // return "menu-links-active"
        //   link_to "<li>#{title}</li>".html_safe, path, class: "menu-links-active"
    }else if (params[0] == 'index' && url == '/'){
        return "menu-links-active";
    }else{
        return ""
        // return "{{#link-to params[0] class='menu-links-active'}} <li>params[1]</li>{{/link-to}}";
        // return #link-to params[0] class='menu-links-active'}}+"<li>"+params[1]+"</li>"+{{/link-to}};
        //   link_to "<li>#{title}</li>".html_safe, path
    }
}

export default Ember.Helper.helper(menuActive);
