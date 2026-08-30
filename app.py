alph = "abcdefghijklmnopqrstuvwxyz"
dome = "oijvoirmlsrmvisurejgjnflkm"
domeLength = len(dome)
alphLength = len(alph)
alphLengthCount = 0
domeLengthCount = 0
alphindex = 0
domeindex = -3
alphShow = alph[alphindex]
domeShow = dome[domeindex]

dome = reversed(dome)
print(dome)
while True:
    if alphLengthCount != domeLength:
        alphLengthCount += 1
        print(alphLengthCount)
        if alphLengthCount == domeLength:
            show  = dome[domeindex]
            print(alph[alphindex])
            dome = dome.replace(dome[domeindex], alph[alphindex])
            
            alphindex +=1
            domeindex -=1
    # else:
    #     break