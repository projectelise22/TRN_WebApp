let count = 0

function incrementCount() {
    count += 1
}

function displayCount() {
    console.log(count)
}

// return masked string
function maskify(cc) {
    let cc_len = cc.length
    let masked_cc = ""
    
    for (let i = 0; i <= cc_len-1; i += 1) {
      if (i > cc_len-5) {
          masked_cc += cc[i]
        } else {
          masked_cc += "#"
        }
    }
    
    return masked_cc
  }
  
  masked_cc = maskify("123345098765")
  console.log(masked_cc)
  