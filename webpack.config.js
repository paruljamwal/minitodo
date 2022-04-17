const path=require("path")
module.exports={
    entry:"./src/index.js",
    output:{
        //resolve gives the absolute path of build directory...
      // . represent current directory
        path:path.resolve(".","build"),
      filename:"bundle.js",
    },
    mode:"development",

   
      module: {
        rules: [
          {
            test: /\.css$/, use: ["style-loader","css-loader"] },
        
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
        
        ],
          },

     
            
    }