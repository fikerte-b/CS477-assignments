/**
 * 3.Using Node Stream API, create a script to unzip a file (after you zip it).
 *  (Use zlib.createGunzip() stream)
 */

 const fs = require("fs");
 const zlib = require("zlib");
 const path = require("path");
 const unzip = zlib.createGunzip();
 
 const readable = fs.createReadStream("./destination.txt.gz");
 const writable = fs.createWriteStream("./unzip.txt");
 readable.pipe(unzip).pipe(writable);