#Quet - Small HTML5 _only_ library for javascript

TODO:: Build CSS module to be able to add specific styles to style attribute

This is an experiment to reduce my dependecy of jQuery

##How to build min script

Included google closure compiler, use terminal.

```
$ cd root_directory

$ java -jar compile.jar --compilation_level SIMPLE_OPTIMIZATION --js=src/quet.core.js --js=src/quet.utils.js --js=src/quet.attributes.js --js=src/quet.events.js --js_output_file=quet.min.js
```

Eventually moving on to a better compiler using node