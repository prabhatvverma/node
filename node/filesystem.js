const file_system =require("fs");

file_system.mkdirSync("files");
// file_system.writeFileSync("./files/new.txt");
file_system.writeFileSync("./files/new.txt", "heloo file system");
file_system.appendFileSync("./files/new.txt", "              hello adding data to excting file");

//it will return buffer data 
const buff_data = file_system.readFileSync("./files/new.txt")

//changing buffer data in to string data 
org_data = buff_data.toString();
console.log(org_data);

//we can directall get string data without getting buffer data
const orignal_data = file_system.readFileSync("./files/new.txt", "utf-8")
console.log(orignal_data);
// file_system.rmdir("./files");

//renaming exicting file 
 
file_system.renameSync("./files/new.txt", "./files/new_renamed.txt")
file_system.unlinkSync("./files/new_renamed.txt")
file_system.rmdirSync("files");