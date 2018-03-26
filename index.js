module.exports = {
  book: {
    assets: "./css",
    css: [
      "rest.css"
    ]
  },
  ebook: {
    assets: "./css",
    css: [
      "rest.css"
    ]
  },
  blocks: {
    rest: {
      blocks: ['get', 'post', 'put', 'patch', 'delete'],
      process: function(block) {
        var contents = '';
        block.blocks.forEach((block) => {
          contents += create(block.name, block)
        })
        return '<div class="rest">' + contents + '</div>';
      }
    }
  }
}

function create(method, block) {
  var url = block.args[0].toLowerCase();
  var desc = block.body;
  return '<div class="method ' + method + '">' + method.toUpperCase() + '</div><div class="url ' + method + '">' + url + '</div><div class="desc ' + method + '">' + desc + '</div>';
}
