$(document).ready(function() {
    //testing the shop page by adding thumbnail for categories

    if (window.location.href.toLowerCase().search(/\/merchandise/) !== -1 || window.location.href.toLowerCase().search(/\/catalog/) !== -1) {

        $("a").each(function() {
            if (this.href.indexOf('21624') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668811-1_th.jpg">'); //CONTAINERS
            } else if (this.href.indexOf('21623') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668783-1_th.jpg">'); //FOIL/SARANWRAP/KRAFTPAPER
            } else if (this.href.indexOf('21628') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663460-1_th.jpg">'); //CLEANERS
            } else if (this.href.indexOf('23858') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663310-1_th.jpg">'); //DISINFECTANT
            } else if (this.href.indexOf('23859') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663430-1_th.jpg">'); //SANITIZER
            } else if (this.href.indexOf('23860') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663460-1_th.jpg">'); //SPRAYER/BOTTLE
            } else if (this.href.indexOf('21621') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668768-1_th.jpg">'); //PLASTICWARE
            } else if (this.href.indexOf('21283') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663776-1_th.jpg">'); //ADAPTER
            } else if (this.href.indexOf('21622') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668781-1_th.jpg">'); //PLATES/BOWLS/CUPS
            } else if (this.href.indexOf('21283') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663775-1_th.jpg">'); //ADAPTER
            } else if (this.href.indexOf('21284') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663777-1_th.jpg">'); //BALLAST
            } else if (this.href.indexOf('21285') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663793-1_th.jpg">'); //BATTERY
            } else if (this.href.indexOf('21295') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663967-1_th.jpg">'); //BEAM CLAMP
            } else if (this.href.indexOf('21286') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663801-1_th.jpg">'); //BELT
            } else if (this.href.indexOf('21287') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663870-1_th.jpg">'); //BLOCK TERMINAL
            } else if (this.href.indexOf('21288') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663878-1_th.jpg">'); //BODY, FEMALE PLUG
            } else if (this.href.indexOf('21289') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663899-1_th.jpg">'); //BOX, ELECTRICAL
            } else if (this.href.indexOf('21290') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663909-1_th.jpg">'); //BRACKET
            } else if (this.href.indexOf('21291') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663914-1_th.jpg">'); //BREAKER
            } else if (this.href.indexOf('21292') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663944-1_th.jpg">'); //BUSHING
            } else if (this.href.indexOf('21293') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663959-1_th.jpg">'); //CAP, MALE PLUG
            } else if (this.href.indexOf('21296') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663969-1_th.jpg">'); //CLEANER
            } else if (this.href.indexOf('21298') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663974-2_th.PNG">'); //CLOCK
            } else if (this.href.indexOf('21299') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663990-1_th.jpg">'); //CONDUIT
            } else if (this.href.indexOf('21307') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664085-1_th.jpg">'); //CONDULET
            } else if (this.href.indexOf('21300') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664024-1_th.jpg">'); //CONNECTOR
            } else if (this.href.indexOf('21301') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664030-1_th.jpg">'); //CORD EXTENSION/POWERSTRIP
            } else if (this.href.indexOf('21302') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664044-1_th.jpg">'); //COUPLING
            } else if (this.href.indexOf('21303') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664054-1_th.jpg">'); //COVER
            } else if (this.href.indexOf('21340') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664381-1_th.jpg">'); //CRIMP TERMINALS
            } else if (this.href.indexOf('21305') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664076-1_th.jpg">'); //ELBOW
            } else if (this.href.indexOf('21304') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664075-1_th.jpg">'); //ELECTRIDUCT
            } else if (this.href.indexOf('21306') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664080-1_th.jpg">'); //FAN
            } else if (this.href.indexOf('21308') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664094-1_th.jpg">'); //FIXTURE
            } else if (this.href.indexOf('21309') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664102-1_th.jpg">'); //FLASHLIGHT
            } else if (this.href.indexOf('21313') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664179-1_th.jpg">'); //FLUORESCENT LAMP
            } else if (this.href.indexOf('21310') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664111-1_th.jpg">'); //FUSE
            } else if (this.href.indexOf('21333') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664331-1_th.jpg">'); //GROUNDING ROD
            } else if (this.href.indexOf('21311') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664150-1_th.jpg">'); //GUARD
            } else if (this.href.indexOf('21314') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664200-1_th.jpg">'); //HID LAMP
            } else if (this.href.indexOf('21312') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663594-1_th.jpg">'); //INCANDESCENT LAMP
            } else if (this.href.indexOf('21329') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664299-1_th.jpg">'); //KNOCKOUT PLUG
            } else if (this.href.indexOf('21316') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664214-1_th.jpg">'); //LAMPHOLDER
            } else if (this.href.indexOf('21315') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664210-1_th.jpg">'); //LED LAMP
            } else if (this.href.indexOf('21317') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664216-1_th.jpg">'); //LENS
            } else if (this.href.indexOf('21319') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664222-1_th.jpg">'); //LOCKNUT
            } else if (this.href.indexOf('21321') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664230-1_th.jpg">'); //LUG
            } else if (this.href.indexOf('21322') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664234-1_th.jpg">'); //MARKER BOOK
            } else if (this.href.indexOf('21323') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664241-1_th.jpg">'); //MINERALAC
            } else if (this.href.indexOf('21324') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664248-2_th.PNG">'); //MOTOR STARTER
            } else if (this.href.indexOf('21325') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664253-1_th.jpg">'); //NIPPLE
            } else if (this.href.indexOf('21294') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663962-1_th.jpg">'); //PHOTO CELL
            } else if (this.href.indexOf('21327') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664275-1_th.jpg">'); //PLASTER RING
            } else if (this.href.indexOf('21328') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664287-1_th.jpg">'); //PLATE
            } else if (this.href.indexOf('21330') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664314-1_th.jpg">'); //RECEPTACLE
            } else if (this.href.indexOf('21331') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664327-2_th.png">'); //REDUCING BUSHING
            } else if (this.href.indexOf('21332') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664329-1_th.jpg">'); //RELAY
            } else if (this.href.indexOf('21334') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664335-1_th.jpg">'); //SPLIT BOLT
            } else if (this.href.indexOf('21335') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664342-1_th.jpg">'); //STRAP
            } else if (this.href.indexOf('21336') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664347-1_th.jpg">'); //SUPERSTRUT
            } else if (this.href.indexOf('21337') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664348-1_th.jpg">'); //SUPPORT
            } else if (this.href.indexOf('21338') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664363-1_th.jpg">'); //SWITCH
            } else if (this.href.indexOf('21339') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664367-1_th.jpg">'); //TAPE
            } else if (this.href.indexOf('21297') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663972-1_th.jpg">'); //TEST CLIP
            } else if (this.href.indexOf('21341') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664415-2_th.jpg">'); //TESTER
            } else if (this.href.indexOf('21318') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664218-1_th.jpg">'); //TROUBLE LIGHT
            } else if (this.href.indexOf('21342') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664421-1_th.jpg">'); //TUBING
            } else if (this.href.indexOf('21343') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664427-1_th.jpg">'); //TY-RAP CABLE TIES
            } else if (this.href.indexOf('21344') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664347-1_th.jpg">'); //UNISTRUT/SUPERSTRUT
            } else if (this.href.indexOf('21345') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664468-1_th.jpg">'); //WASHER
            } else if (this.href.indexOf('21346') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664473-1_th.jpg">'); //WIRE
            } else if (this.href.indexOf('21320') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664227-1_th.jpg">'); //WIRE LUBE
            } else if (this.href.indexOf('21326') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664271-1_th.jpg">'); //WIRE NUT
            } else if (this.href.indexOf('21347') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664540-1_th.jpg">'); //WIREMOLD
            } else if (this.href.indexOf('21697') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663563-1_th.jpg">'); //BAGS
            } else if (this.href.indexOf('21657') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663677-1_th.jpg">'); //BLADE
            } else if (this.href.indexOf('21698') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663586-1_th.jpg">'); //BOXES
            } else if (this.href.indexOf('21666') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663221-1_th.jpg">'); //BROOM
            } else if (this.href.indexOf('21643') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663241-1_th.jpg">'); //BRUSH
            } else if (this.href.indexOf('21667') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663242-1_th.jpg">'); //CADDY
            } else if (this.href.indexOf('21668') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663248-1_th.jpg">'); //CART
            } else if (this.href.indexOf('21669') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663254-2_th.jpg">'); //CHALK/WHITEBOARD SUPPLIES
            } else if (this.href.indexOf('21670') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663258-2_th.jpg">'); //CLEANERS
            } else if (this.href.indexOf('21671') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663651-1_th.jpg">'); //COMPOUND
            } else if (this.href.indexOf('21731') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663766-3_th.PNG">'); //COPY PAPER
            } else if (this.href.indexOf('21652') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663675-1_th.jpg">'); //CORD EXTENSION/POWERSTRIP
            } else if (this.href.indexOf('21672') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663292-1_th.jpg">'); //DIAPER TABLE COVER
            } else if (this.href.indexOf('21673') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663652-1_th.jpg">'); //DISINFECTANT
            } else if (this.href.indexOf('21689') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663528-1_th.jpg">'); //DISTILLED WATER
            } else if (this.href.indexOf('21645') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663699-1_th.jpg">'); //DUST PAN
            } else if (this.href.indexOf('21695') !== -1) {
                $(this).prepend('<img src="/storeimages/422-732680-2_th.PNG">'); //FIRST AID
            } else if (this.href.indexOf('21674') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663322-1_th.jpg">'); //FLOOR FINISH
            } else if (this.href.indexOf('21654') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664179-1_th.jpg">'); //FLUORESCENT LAMP
            } else if (this.href.indexOf('21651') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663660-1_th.jpg">'); //GLOVE
            } else if (this.href.indexOf('21660') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663636-1_th.jpg">'); //GUN/NOZZLE
            } else if (this.href.indexOf('21675') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663662-2_th.jpg">'); //HANDLE
            } else if (this.href.indexOf('21676') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663668-1_th.jpg">'); //MOP HEAD
            } else if (this.href.indexOf('21655') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663616-1_th.jpg">'); //HID LAMP
            } else if (this.href.indexOf('21658') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663589-2_th.jpg">'); //HOLDER
            } else if (this.href.indexOf('21653') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664165-1_th.jpg">'); //INCANDESCENT LAMP
            } else if (this.href.indexOf('21659') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663650-1_th.jpg">'); //LADDER
            } else if (this.href.indexOf('21665') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663220-1_th.jpg">'); //LAUNDRY BAG
            } else if (this.href.indexOf('21694') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663751-1_th.jpg">'); //MASK/CARTRIDGES
            } else if (this.href.indexOf('21677') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663360-1_th.jpg">'); //MICROFIBER
            } else if (this.href.indexOf('21650') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663371-1_th.jpg">'); //MOP
            } else if (this.href.indexOf('21680') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663416-1_th.jpg">'); //MOP BUCKET
            } else if (this.href.indexOf('21679') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663681-1_th.jpg">'); //PAD
            } else if (this.href.indexOf('21687') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663466-1_th.jpg">'); //PAPER TOWEL
            } else if (this.href.indexOf('21690') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663730-1_th.jpg">'); //PENETRATING FLUID
            } else if (this.href.indexOf('21701') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663774-2_th.jpg">'); //PLUNGER
            } else if (this.href.indexOf('21647') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663422-1_th.jpg">'); //POLISH
            } else if (this.href.indexOf('21661') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663637-1_th.jpg">'); //PORTABLE SPRAYER
            } else if (this.href.indexOf('21663') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663634-1_th.jpg">'); //RAGS
            } else if (this.href.indexOf('21681') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663425-1_th.jpg">'); //REMOVER
            } else if (this.href.indexOf('21693') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663750-2_th.PNG">'); //SAFETY
            } else if (this.href.indexOf('21692') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663737-2_th.PNG">'); //SAFETY FOOTWEAR
            } else if (this.href.indexOf('21678') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663377-1_th.jpg">'); //SANITARY NAPKIN
            } else if (this.href.indexOf('21664') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663635-1_th.jpg">'); //WASHERS
            } else if (this.href.indexOf('21682') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663704-1_th.jpg">'); //SEALER
            } else if (this.href.indexOf('21683') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663440-1_th.jpg">'); //SIGNS
            } else if (this.href.indexOf('21649') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663450-2_th.JPG">'); //SOAP
            } else if (this.href.indexOf('21648') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663458-1_th.jpg">'); //SPONGE
            } else if (this.href.indexOf('21684') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663708-2_th.jpg">'); //SPRAYER/BOTTLE
            } else if (this.href.indexOf('21685') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663716-1_th.jpg">'); //SQUEEGEE
            } else if (this.href.indexOf('21700') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663762-1_th.jpg">'); //TAPE
            } else if (this.href.indexOf('21691') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663533-1_th.jpg">'); //TENNIS BALL
            } else if (this.href.indexOf('21662') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663721-1_th.jpg">'); //CAN/DOLLY/FUNNEL
            } else if (this.href.indexOf('21686') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663465-2_th.PNG">'); //TOILET TISSUE
            } else if (this.href.indexOf('21699') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663769-1_th.jpg">'); //TONER
            } else if (this.href.indexOf('21646') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663630-1_th.jpg">'); //TOOLS
            } else if (this.href.indexOf('21688') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663511-1_th.jpg">'); //VACUUM
            } else if (this.href.indexOf('21349') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664593-1_th.jpg">'); //ADHESIVES
            } else if (this.href.indexOf('21376') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664792-1_th.jpg">'); //ALLEMITE FITTING
            } else if (this.href.indexOf('21350') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664630-1_th.jpg">'); //ANCHORS
            } else if (this.href.indexOf('21355') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664670-1_th.jpg">'); //BARREL BOLT
            } else if (this.href.indexOf('21354') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663677-1_th.jpg">'); //BLADE
            } else if (this.href.indexOf('21357') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664687-1_th.jpg">'); //BRACKET
            } else if (this.href.indexOf('21393') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664946-1_th.jpg">'); //CAN OPENER
            } else if (this.href.indexOf('21359') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664699-1_th.jpg">'); //CASTER
            } else if (this.href.indexOf('21360') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664703-1_th.jpg">'); //CATCH
            } else if (this.href.indexOf('21361') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664710-1_th.jpg">'); //CHAIN
            } else if (this.href.indexOf('21363') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664718-1_th.jpg">'); //CHECK/TAG
            } else if (this.href.indexOf('21362') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664717-1_th.jpg">'); //CHALK
            } else if (this.href.indexOf('21365') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664728-1_th.jpg">'); //CLEVIS
            } else if (this.href.indexOf('21366') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664735-1_th.jpg">'); //CLIP
            } else if (this.href.indexOf('21367') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664741-1_th.jpg">'); //CLOTH
            } else if (this.href.indexOf('21368') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664749-1_th.jpg">'); //CORD
            } else if (this.href.indexOf('21369') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664750-1_th.jpg">'); //CORK
            } else if (this.href.indexOf('21353') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664669-1_th.jpg">'); //CORNER BEAD
            } else if (this.href.indexOf('21356') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664674-1_th.jpg">'); //CORNER BRACE
            } else if (this.href.indexOf('21370') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664756-1_th.jpg">'); //COTTER PIN
            } else if (this.href.indexOf('21372') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664773-1_th.jpg">'); //CRAYON
            } else if (this.href.indexOf('21358') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664688-1_th.jpg">'); //DOOR BUTTON
            } else if (this.href.indexOf('21408') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665646-1_th.jpg">'); //FEATURE STRIP
            } else if (this.href.indexOf('21374') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664782-1_th.jpg">'); //FENCE
            } else if (this.href.indexOf('21375') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664786-1_th.jpg">'); //FILM/PLASTIC SHEETING
            } else if (this.href.indexOf('21377') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664800-1_th.jpg">'); //FLAG
            } else if (this.href.indexOf('21409') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665648-1_th.jpg">'); //FLY SWATTER
            } else if (this.href.indexOf('21373') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664775-1_th.jpg">'); //FRAME FASTER
            } else if (this.href.indexOf('21378') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664802-1_th.jpg">'); //GUN/NOZZLE
            } else if (this.href.indexOf('21379') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664804-1_th.jpg">'); //HAND TRUCK
            } else if (this.href.indexOf('21380') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664810-1_th.jpg">'); //HANDLE
            } else if (this.href.indexOf('21381') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664820-1_th.jpg">'); //HANGER
            } else if (this.href.indexOf('21348') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664575-1_th.jpg">'); //HARDWARE
            } else if (this.href.indexOf('21382') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664822-1_th.jpg">'); //HASP
            } else if (this.href.indexOf('21383') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664825-2_th.jpg">'); //HINGE
            } else if (this.href.indexOf('21384') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663589-2_th.jpg">'); //HOLDER
            } else if (this.href.indexOf('21385') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664827-1_th.jpg">'); //HOOK
            } else if (this.href.indexOf('21386') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663619-1_th.jpg">'); //HOSE
            } else if (this.href.indexOf('21364') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664726-1_th.jpg">'); //HOSE CLAMP
            } else if (this.href.indexOf('21371') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664758-1_th.jpg">'); //HOSE COUPLING
            } else if (this.href.indexOf('21387') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664865-1_th.jpg">'); //LABEL/GARDEN STAKE
            } else if (this.href.indexOf('23558') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664581-1_th.jpg">'); //THERMOMETER
            } else if (this.href.indexOf('21388') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663650-1_th.jpg">'); //LADDER
            } else if (this.href.indexOf('21389') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664868-1_th.jpg">'); //LIGHTER
            } else if (this.href.indexOf('21391') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664883-1_th.jpg">'); //LOCK/PADLOCK
            } else if (this.href.indexOf('21392') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664900-1_th.jpg">'); //LUMBER/METAL STUD
            } else if (this.href.indexOf('21416') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666136-1_th.jpg">'); //MOUSE TRAP
            } else if (this.href.indexOf('21394') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664947-1_th.jpg">'); //O RING
            } else if (this.href.indexOf('21395') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664948-1_th.jpg">'); //PINS
            } else if (this.href.indexOf('21406') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665643-1_th.jpg">'); //PORTABLE SPRAYER
            } else if (this.href.indexOf('21396') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664951-1_th.jpg">'); //PULLEY
            } else if (this.href.indexOf('21390') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664875-1_th.jpg">'); //REPAIR LINK
            } else if (this.href.indexOf('21398') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664961-1_th.jpg">'); //RING
            } else if (this.href.indexOf('21399') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664967-1_th.jpg">'); //RIVETS
            } else if (this.href.indexOf('21401') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665048-1_th.jpg">'); //ROPE
            } else if (this.href.indexOf('21352') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664665-1_th.jpg">'); //RUBBER BASE
            } else if (this.href.indexOf('21402') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665052-1_th.jpg">'); //SCALE
            } else if (this.href.indexOf('21403') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665161-1_th.jpg">'); //SCREWS/WASHERS/NUTS
            } else if (this.href.indexOf('21404') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665634-1_th.jpg">'); //SNAP
            } else if (this.href.indexOf('21405') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665642-1_th.jpg">'); //SOLDER
            } else if (this.href.indexOf('21407') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665645-1_th.jpg">'); //STAPLE
            } else if (this.href.indexOf('21351') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664661-1_th.jpg">'); //STEEL BANDING
            } else if (this.href.indexOf('21400') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664992-1_th.jpg">'); //STEEL/ROD
            } else if (this.href.indexOf('21397') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664957-1_th.jpg">'); //STORAGE RACKS
            } else if (this.href.indexOf('21410') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665651-1_th.jpg">'); //TARP
            } else if (this.href.indexOf('21411') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665653-1_th.jpg">'); //TIES
            } else if (this.href.indexOf('21412') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665659-1_th.jpg">'); //TILE
            } else if (this.href.indexOf('21413') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665673-1_th.jpg">'); //TIN WARE
            } else if (this.href.indexOf('21421') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666156-1_th.jpg">'); //TOOLBOX
            } else if (this.href.indexOf('21414') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665717-1_th.jpg">'); //TOOLS
            } else if (this.href.indexOf('21415') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666131-1_th.jpg">'); //TORCH
            } else if (this.href.indexOf('21417') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666138-1_th.jpg">'); //TWINE
            } else if (this.href.indexOf('21418') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666145-1_th.jpg">'); //TWIST EMS
            } else if (this.href.indexOf('21419') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666149-1_th.jpg">'); //WEATHER STRIP
            } else if (this.href.indexOf('21420') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666154-1_th.jpg">'); //WHEEL, WIRE, POLISHING
            } else if (this.href.indexOf('21440') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663325-1_th.jpg">'); //AIR FRESHENER
            } else if (this.href.indexOf('21422') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663215-1_th.jpg">'); //AMMONIA
            } else if (this.href.indexOf('21476') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663547-1_th.jpg">'); //BAGS
            } else if (this.href.indexOf('21477') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663576-1_th.jpg">'); //BOXES
            } else if (this.href.indexOf('21425') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663221-1_th.jpg">'); //BROOM
            } else if (this.href.indexOf('21426') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663241-1_th.jpg">'); //BRUSH
            } else if (this.href.indexOf('21427') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663242-1_th.jpg">'); //CADDY
            } else if (this.href.indexOf('21428') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663249-1_th.jpg">'); //CART
            } else if (this.href.indexOf('21429') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663254-2_th.jpg">'); //CHALK/WHITEBOARD SUPPLIES
            } else if (this.href.indexOf('21430') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663288-1_th.jpg">'); //CLEANERS
            } else if (this.href.indexOf('21431') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663651-1_th.jpg">'); //COMPOUND
            } else if (this.href.indexOf('21433') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663297-1_th.jpg">'); //DEODORIZER
            } else if (this.href.indexOf('21434') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663299-1_th.jpg">'); //DETERGENT
            } else if (this.href.indexOf('21432') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663292-1_th.jpg">'); //DIAPER TABLE COVER
            } else if (this.href.indexOf('21435') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663301-1_th.jpg">'); //DISINFECTANT
            } else if (this.href.indexOf('21436') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663316-1_th.jpg">'); //DISPENSER
            } else if (this.href.indexOf('21472') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663528-1_th.jpg">'); //DISTILLED WATER
            } else if (this.href.indexOf('21452') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663699-1_th.jpg">'); //DUST PAN
            } else if (this.href.indexOf('21438') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663321-1_th.jpg">'); //DUSTING FABRIC
            } else if (this.href.indexOf('21439') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663322-1_th.jpg">'); //FLOOR FINISH
            } else if (this.href.indexOf('21611') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663743-1_th.jpg">'); //GLOVE
            } else if (this.href.indexOf('21437') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663320-1_th.jpg">'); //HAND DUSTER
            } else if (this.href.indexOf('21441') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663662-2_th.jpg">'); //HANDLE
            } else if (this.href.indexOf('21442') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663668-1_th.jpg">'); //MOP HEAD
            } else if (this.href.indexOf('21424') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663218-1_th.jpg">'); //LAUNDRY BAG
            } else if (this.href.indexOf('21444') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663352-1_th.jpg">'); //LOTION
            } else if (this.href.indexOf('21443') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663348-1_th.jpg">'); //MASON JAR
            } else if (this.href.indexOf('21445') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663354-1_th.jpg">'); //MAT
            } else if (this.href.indexOf('21446') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663358-2_th.PNG">'); //MATCH
            } else if (this.href.indexOf('21447') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663360-1_th.jpg">'); //MIRCOFIBER
            } else if (this.href.indexOf('21448') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663371-1_th.jpg">'); //MOP
            } else if (this.href.indexOf('21451') !== -1) {
                $(this).prepend('<img src="https://order.centralstores.iastate.edu/storeimages/422-663415-4_th.PNG">'); //MOP BUCKET
            } else if (this.href.indexOf('21450') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663680-1_th.jpg">'); //PAD
            } else if (this.href.indexOf('21468') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663466-1_th.jpg">'); //PAPER TOWEL
            } else if (this.href.indexOf('21453') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663422-1_th.jpg">'); //POLISH
            } else if (this.href.indexOf('21454') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663634-1_th.jpg">'); //RAGS
            } else if (this.href.indexOf('21455') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663702-1_th.jpg">'); //REMOVER
            } else if (this.href.indexOf('21456') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663428-2_th.PNG">'); //RUBBER BAND
            } else if (this.href.indexOf('21449') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663379-1_th.jpg">'); //SANITARY NAPKIN
            } else if (this.href.indexOf('21457') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663432-2_th.jpg">'); //SANITIZER
            } else if (this.href.indexOf('21458') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663434-1_th.jpg">'); //SCREEN, URINAL
            } else if (this.href.indexOf('21459') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663704-1_th.jpg">'); //SEALER
            } else if (this.href.indexOf('21460') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663440-1_th.jpg">'); //SIGNS
            } else if (this.href.indexOf('21461') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663450-2_th.JPG">'); //SOAP
            } else if (this.href.indexOf('21462') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663456-1_th.jpg">'); //SODA
            } else if (this.href.indexOf('21607') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663530-1_th.jpg">'); //SOIL
            } else if (this.href.indexOf('21463') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663458-1_th.jpg">'); //SPONGE
            } else if (this.href.indexOf('21464') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663708-2_th.jpg">'); //SPRAYER/BOTTLE
            } else if (this.href.indexOf('21465') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663716-1_th.jpg">'); //SQUEEGEE
            } else if (this.href.indexOf('21466') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663463-2_th.png">'); //STRIPPER
            } else if (this.href.indexOf('21475') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663533-1_th.jpg">'); //TENNIS BALL
            } else if (this.href.indexOf('21467') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663465-2_th.PNG">'); //TOILET TISSUE
            } else if (this.href.indexOf('21469') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663485-1_th.jpg">'); //TREATMENT, DUST
            } else if (this.href.indexOf('21470') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663514-1_th.jpg">'); //VACUUM
            } else if (this.href.indexOf('21471') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663527-1_th.jpg">'); //VINEGAR
            } else if (this.href.indexOf('21473') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663529-1_th.PNG">'); //WAX
            } else if (this.href.indexOf('21423') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663216-1_th.jpg">'); //WAX APPLICATOR
            } else if (this.href.indexOf('21474') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663531-1_th.jpg">'); //WET/DRY VAC
            } else if (this.href.indexOf('21487') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666201-1_th.jpg">'); //ANTIFREEZE
            } else if (this.href.indexOf('21481') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666177-1_th.jpg">'); //CHEMICAL
            } else if (this.href.indexOf('21489') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666206-1_th.jpg">'); //DEICER/ICE MELT
            } else if (this.href.indexOf('21485') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666194-1_th.jpg">'); //GREASE
            } else if (this.href.indexOf('21486') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666197-1_th.jpg">'); //ICE SCRAPERS
            } else if (this.href.indexOf('21484') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666189-1_th.jpg">'); //KEROSENE
            } else if (this.href.indexOf('21478') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666159-1_th.jpg">'); //LUBRICANTS
            } else if (this.href.indexOf('21480') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666172-1_th.jpg">'); //MISC AUTO SUPPLIES
            } else if (this.href.indexOf('21479') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666166-1_th.jpg">'); //OIL
            } else if (this.href.indexOf('21488') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666205-1_th.jpg">'); //OIL DRY
            } else if (this.href.indexOf('21483') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663730-1_th.jpg">'); //PENETRATING FLUID
            } else if (this.href.indexOf('21482') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666180-1_th.jpg">'); //PROPANE
            } else if (this.href.indexOf('21500') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666321-1_th.jpg">'); //ABRASIVES
            } else if (this.href.indexOf('21501') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666348-1_th.jpg">'); //BRUSHES
            } else if (this.href.indexOf('21499') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666294-1_th.jpg">'); //CAULKING
            } else if (this.href.indexOf('21490') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666213-1_th.jpg">'); //COLORANT
            } else if (this.href.indexOf('21505') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666394-1_th.jpg">'); //DRY WALL COMPOUND
            } else if (this.href.indexOf('21492') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666239-1_th.jpg">'); //EXTERIOR PAINT
            } else if (this.href.indexOf('21497') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666286-1_th.jpg">'); //FLOOR PAINT
            } else if (this.href.indexOf('21502') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666361-1_th.jpg">'); //GLASS BEADS
            } else if (this.href.indexOf('21491') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666244-1_th.jpg">'); //INTERIOR WALL PAINT
            } else if (this.href.indexOf('21493') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666243-1_th.jpg">'); //INTERIOR/EXTERIOR PAINT
            } else if (this.href.indexOf('21498') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666287-1_th.jpg">'); //MISCELLANEOUS
            } else if (this.href.indexOf('21503') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666375-1_th.jpg">'); //SPRAY PAINT
            } else if (this.href.indexOf('21496') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666271-1_th.jpg">'); //SUNDRIES
            } else if (this.href.indexOf('21504') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663772-1_th.jpg">'); //TAPE
            } else if (this.href.indexOf('21495') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666256-1_th.jpg">'); //THINNER/CLEANER
            } else if (this.href.indexOf('21494') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666253-1_th.jpg">'); //WOOD FINISH
            } else if (this.href.indexOf('21509') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666423-1_th.jpg">'); //AERATOR
            } else if (this.href.indexOf('21510') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666436-1_th.jpg">'); //ALUMINUM FITTING
            } else if (this.href.indexOf('21513') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666443-1_th.jpg">'); //BRASS FITTINGS
            } else if (this.href.indexOf('21514') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666559-1_th.jpg">'); //BUSHINGS CAST IRON / GALV
            } else if (this.href.indexOf('21554') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667794-1_th.jpg">'); //CAGE UNITS
            } else if (this.href.indexOf('21515') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666576-1_th.jpg">'); //CAPTHREADED/CASTIRON/GALV
            } else if (this.href.indexOf('21511') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666437-1_th.jpg">'); //CLOSET AUGER
            } else if (this.href.indexOf('21512') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666439-1_th.jpg">'); //CLOSET BOLT
            } else if (this.href.indexOf('21549') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667758-1_th.jpg">'); //CLOSET TANK SEAL
            } else if (this.href.indexOf('21518') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666594-1_th.jpg">'); //COCK VALVE
            } else if (this.href.indexOf('21520') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666612-1_th.jpg">'); //COMPLETE STRAINER BASKET
            } else if (this.href.indexOf('21569') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667958-1_th.jpg">'); //COMPRESSION FITTINGS
            } else if (this.href.indexOf('21521') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666623-1_th.jpg">'); //COPPER DRAINAGE FITTINGS
            } else if (this.href.indexOf('21527') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667017-1_th.jpg">'); //PROPRESS FITTINGS
            } else if (this.href.indexOf('21522') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666770-1_th.jpg">'); //COPPER SOLDER FITTINGS
            } else if (this.href.indexOf('21523') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666854-1_th.jpg">'); //COUPLINGS
            } else if (this.href.indexOf('21517') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666591-1_th.jpg">'); //DRAIN CLEANER
            } else if (this.href.indexOf('21530') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667163-1_th.jpg">'); //DRINKING FOUNTAIN PARTS
            } else if (this.href.indexOf('21525') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666874-1_th.jpg">'); //ELBOW CI/MALLEABLE/GALVAN
            } else if (this.href.indexOf('21526') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666940-1_th.jpg">'); //FAUCET
            } else if (this.href.indexOf('21524') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666861-1_th.jpg">'); //FAUCET HOLE COVER
            } else if (this.href.indexOf('21529') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667158-1_th.jpg">'); //FLANGE
            } else if (this.href.indexOf('21548') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667757-1_th.jpg">'); //FLOAT ROD
            } else if (this.href.indexOf('21532') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667164-1_th.jpg">'); //FUSEAL
            } else if (this.href.indexOf('21533') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667168-1_th.jpg">'); //GASKET/BOWL WAX
            } else if (this.href.indexOf('21534') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667172-1_th.jpg">'); //GAUGE
            } else if (this.href.indexOf('21535') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667184-1_th.jpg">'); //HANDLE
            } else if (this.href.indexOf('21536') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667185-1_th.jpg">'); //HYDRANT
            } else if (this.href.indexOf('21537') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667263-1_th.jpg">'); //INSULATION
            } else if (this.href.indexOf('21539') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667279-2_th.jpg">'); //LABWASTE
            } else if (this.href.indexOf('21541') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667321-1_th.jpg">'); //NIPPLE
            } else if (this.href.indexOf('21543') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667538-1_th.jpg">'); //PACKING
            } else if (this.href.indexOf('21544') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667571-1_th.jpg">'); //PIPE
            } else if (this.href.indexOf('21519') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666603-1_th.jpg">'); //PIPE THREAD COMPOUND
            } else if (this.href.indexOf('21545') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667602-1_th.jpg">'); //PLUG
            } else if (this.href.indexOf('21540') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667287-1_th.jpg">'); //PLUMBER LOCKNUT
            } else if (this.href.indexOf('21570') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667965-1_th.jpg">'); //PLUMBING HANGERS
            } else if (this.href.indexOf('21572') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668034-1_th.jpg">'); //PLUMBING VALVES
            } else if (this.href.indexOf('21531') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663774-2_th.jpg">'); //PLUNGER
            } else if (this.href.indexOf('21546') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667629-1_th.jpg">'); //PUMP
            } else if (this.href.indexOf('21547') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667697-1_th.jpg">'); //PVC FITTING
            } else if (this.href.indexOf('21568') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667922-1_th.jpg">'); //SALT
            } else if (this.href.indexOf('21551') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667762-1_th.jpg">'); //SHOWER HEAD
            } else if (this.href.indexOf('21516') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666588-2_th.jpg">'); //SKINNER CLAMP
            } else if (this.href.indexOf('21542') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667536-1_th.jpg">'); //SLIP NUT
            } else if (this.href.indexOf('21571') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667995-1_th.jpg">'); //SLOAN
            } else if (this.href.indexOf('21552') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667766-1_th.jpg">'); //SPUD
            } else if (this.href.indexOf('21553') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667768-1_th.jpg">'); //STEAM TRAP
            } else if (this.href.indexOf('21555') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667804-1_th.jpg">'); //STOP
            } else if (this.href.indexOf('21556') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667808-2_th.png">'); //STRAINER
            } else if (this.href.indexOf('21557') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667813-1_th.jpg">'); //STRAP COPPER TUBING
            } else if (this.href.indexOf('21558') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667821-1_th.jpg">'); //SUPPLY
            } else if (this.href.indexOf('21559') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667829-2_th.jpg">'); //SYPHON
            } else if (this.href.indexOf('22996') !== -1) {
                $(this).prepend('<img src="/storeimages/422-697740-6_th.PNG">'); //RECYCLED LAMP CONTAINERS
            } else if (this.href.indexOf('22997') !== -1) {
                $(this).prepend('<img src="/storeimages/422-697740-6_th.PNG">'); //RECYCLED LAMP CONTAINERS
            } else if (this.href.indexOf('22998') !== -1) {
                $(this).prepend('<img src="/storeimages/422-697740-6_th.PNG">'); //RECYCLED LAMP CONTAINERS
            } else if (this.href.indexOf('21560') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667833-1_th.jpg">'); //TAILPIECE
            } else if (this.href.indexOf('21561') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667849-2_th.jpg">'); //TEE
            } else if (this.href.indexOf('21562') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667880-1_th.jpg">'); //THERMOMETER
            } else if (this.href.indexOf('21550') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667759-1_th.jpg">'); //TOILET SEAT
            } else if (this.href.indexOf('21563') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667882-1_th.jpg">'); //TRAP
            } else if (this.href.indexOf('21564') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667886-1_th.PNG">'); //TUBE/SLIPJOINT EXTENSION
            } else if (this.href.indexOf('21565') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667902-1_th.jpg">'); //UNION
            } else if (this.href.indexOf('21566') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667917-1_th.jpg">'); //WASHER
            } else if (this.href.indexOf('21528') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667154-1_th.jpg">'); //WATER FILTER
            } else if (this.href.indexOf('21538') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667264-1_th.jpg">'); //WATER KEY
            } else if (this.href.indexOf('21567') !== -1) {
                $(this).prepend('<img src="/storeimages/422-667920-1_th.PNG">'); //WIRE
            } else if (this.href.indexOf('21508') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666413-1_th.jpg">'); //COLORED PAPER
            } else if (this.href.indexOf('21506') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666421-2_th.jpg">'); //COPY PAPER
            } else if (this.href.indexOf('21507') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666399-1_th.jpg">'); //SPECIAL PAPER
            } else if (this.href.indexOf('21580') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668100-1_th.jpg">'); //AIR FILTER ELEMENT
            } else if (this.href.indexOf('21573') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668062-1_th.jpg">'); //AQUASTAT
            } else if (this.href.indexOf('21600') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668234-1_th.jpg">'); //BRASS AIR CONTROL FITTING
            } else if (this.href.indexOf('21575') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668071-1_th.jpg">'); //CAPACITOR
            } else if (this.href.indexOf('21576') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668074-1_th.jpg">'); //CLEANER
            } else if (this.href.indexOf('21577') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668081-1_th.jpg">'); //CONTROL
            } else if (this.href.indexOf('21582') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668128-1_th.jpg">'); //COPPER REFRIGERANT FITTIN
            } else if (this.href.indexOf('21579') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668090-1_th.jpg">'); //DRIER
            } else if (this.href.indexOf('21581') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668122-1_th.jpg">'); //FILTER
            } else if (this.href.indexOf('21586') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668175-1_th.jpg">'); //LIQUID INDICATOR
            } else if (this.href.indexOf('21587') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668181-1_th.jpg">'); //MOTOR
            } else if (this.href.indexOf('21589') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668193-1_th.jpg">'); //REFRIGERANT
            } else if (this.href.indexOf('21584') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668170-1_th.jpg">'); //REFRIGERATION GAUGE
            } else if (this.href.indexOf('21585') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668174-1_th.jpg">'); //REFRIGERATION HOSE
            } else if (this.href.indexOf('21588') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668186-1_th.jpg">'); //REFRIGERATION OIL
            } else if (this.href.indexOf('21590') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668195-1_th.jpg">'); //REGULATOR
            } else if (this.href.indexOf('21591') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668196-1_th.jpg">'); //REMOVER
            } else if (this.href.indexOf('21592') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668197-2_th.jpg">'); //SLUG
            } else if (this.href.indexOf('21583') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668159-1_th.jpg">'); //SWAGELOK FITTING
            } else if (this.href.indexOf('21593') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668198-1_th.jpg">'); //TAPE
            } else if (this.href.indexOf('21594') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668199-1_th.jpg">'); //THERMOCOUPLE
            } else if (this.href.indexOf('21595') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668200-1_th.jpg">'); //THERMOMETER
            } else if (this.href.indexOf('21596') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668201-1_th.jpg">'); //THERMOSTAT
            } else if (this.href.indexOf('21597') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668203-1_th.jpg">'); //TRANSFORMER
            } else if (this.href.indexOf('21598') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668209-1_th.jpg">'); //TUBING/COPPER/PLASTIC/VIN
            } else if (this.href.indexOf('21599') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668226-1_th.jpg">'); //VALVE
            } else if (this.href.indexOf('21578') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668084-1_th.jpg">'); //VALVE CORE
            } else if (this.href.indexOf('21574') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668066-1_th.jpg">'); //WIRE FITTING BRUSH
            } else if (this.href.indexOf('21616') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668751-1_th.jpg">'); //EAR PLUGS/MUFFS
            } else if (this.href.indexOf('21613') !== -1) {
                $(this).prepend('<img src="/storeimages/422-732680-2_th.PNG">'); //FIRST AID
            } else if (this.href.indexOf('21611') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663742-1_th.jpg">'); //GLOVE
            } else if (this.href.indexOf('21614') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668718-1_th.jpg">'); //HAZARDOUS SIGNS
            } else if (this.href.indexOf('21617') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668757-1_th.jpg">'); //HEAT PROTECTION
            } else if (this.href.indexOf('21615') !== -1) {
                $(this).prepend('<img src="/storeimages/422-779129-2_th.jpg">'); //MASK/CARTRIDGES
            } else if (this.href.indexOf('21612') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668762-1_th.jpg">'); //POTTING SOIL
            } else if (this.href.indexOf('21608') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668552-1_th.jpg">'); //SAFETY
            } else if (this.href.indexOf('21610') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663737-2_th.PNG">'); //SAFETY FOOTWEAR
            } else if (this.href.indexOf('21609') !== -1) {
                $(this).prepend('<img src="/storeimages/422-738022-3_th.PNG">'); //SAFETY GLASSES
            } else if (this.href.indexOf('21619') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668765-3_th.PNG">'); //FERTILIZER
            } else if (this.href.indexOf('21618') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668762-1_th.jpg">'); //SOIL
            } else if (this.href.indexOf('21620') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668766-2_th.jpg">'); //VERMICULITE
            } else if (this.href.indexOf('21601') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668276-1_th.jpg">'); //TONER
            } else if (this.href.indexOf('22115') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663463-2_th.png">'); //STRIPPER
            } else if (this.href.indexOf('24140') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666177-1_th.jpg">'); //CHEMICALS
            } else if (this.href.indexOf('24139') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666136-1_th.jpg">'); //MOUSE TRAP
            } else if (this.href.indexOf('24307') !== -1) {
                $(this).prepend('<img src="/storeimages/422-729958-1_th.jpg">'); //CLEANERS
            } else if (this.href.indexOf('24306') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663460-1_th.jpg">'); //DISINFECTANT
            } else if (this.href.indexOf('24309') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663723-1_th.jpg">'); //GLOVE
            } else if (this.href.indexOf('24305') !== -1) {
                $(this).prepend('<img src="/storeimages/422-741514-3_th.PNG">'); //SANITIZER
            } else if (this.href.indexOf('24308') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663460-1_th.jpg">'); //SPRAYER/BOTTLE    
            } else if (this.href.indexOf('24308') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666283-1_th.jpg">'); //CHALK/WHITEBOARD SUPPLIES
            } else if (this.href.indexOf('24326') !== -1) {
                $(this).prepend('<img src="/storeimages/422-734924-1_th.jpg">'); //MEGA PRESS 
            } else if (this.href.indexOf('24371') !== -1) {
                $(this).prepend('<img src="/storeimages/422-735389-2_th.jpg">'); //MASK/CARTRIDGES
            } else if (this.href.indexOf('24427') !== -1) {
                $(this).prepend('<img src="/storeimages/422-741825-1_th.jpg">'); //SANITIZER DISPENSER
            } else if (this.href.indexOf('24560') !== -1) {
                $(this).prepend('<img src="/storeimages/422-739449-4_th.PNG">'); //SAFETY BARRIER
            } else if (this.href.indexOf('24559') !== -1) {
                $(this).prepend('<img src="/storeimages/422-739447-4_th.PNG">'); //SAFETY SIGNS
            } else if (this.href.indexOf('26266') !== -1) {
                $(this).prepend('<img src="/storeimages/422-732680-2_th.PNG">'); //THERMOMETER
            } else if (this.href.indexOf('26283') !== -1) {
                $(this).prepend('<img src="/storeimages/422-800285-6_th.PNG">'); //DISINFECTANT WIPES
            } else if (this.href.indexOf('26282') !== -1) {
                $(this).prepend('<img src="/storeimages/422-741514-3_th.PNG">'); //THERMOMETER
            } else if (this.href.indexOf('26327') !== -1) {
                $(this).prepend('<img src="/storeimages/422-798688-1_th.PNG">'); //ZOOMLOCK
            } else if (this.href.indexOf('24970') !== -1) {
                $(this).prepend('<img src="/storeimages/422-742992-1_th.jpg">'); //TERSANO
            } else if (this.href.indexOf('24567') !== -1) {
                $(this).prepend('<img src="/storeimages/422-742054-1_th.jpg">'); //NITRILE GLOVES
            } else if (this.href.indexOf('26460') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663587-1_th.jpg">'); //BOXES
            } else if (this.href.indexOf('26461') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666389-1_th.jpg">'); //TAPE
            } else if (this.href.indexOf('26462') !== -1) {
                $(this).prepend('<img src="/storeimages/422-668803-1_th.jpg">'); //WRAPS
            } else if (this.href.indexOf('26470') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663470-1_th.jpg">'); //PAPER TOWELS
            } else if (this.href.indexOf('26679') !== -1) {
                $(this).prepend('<img src="/storeimages/422-738022-3_th.PNG">'); //COVID-19 SAFETY GLASSES
            } else if (this.href.indexOf('26956') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665648-1_th.jpg">'); //INSECT REPLLENT
            } else if (this.href.indexOf('27081') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665732-1_th.jpg">'); //DRILL BITS
            } else if (this.href.indexOf('27140') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663793-1_th.jpg">'); //Batteries
            } else if (this.href.indexOf('27147') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663857-1_th.jpg">'); //Belts
            } else if (this.href.indexOf('27139') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663919-2_th.jpg">'); //Circuit Breakers and Boxes
            } else if (this.href.indexOf('27127') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663898-1_th.jpg">'); //Electrical Boxes
            } else if (this.href.indexOf('27115') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664473-1_th.jpg">'); //Electrical Wires & Cables
            } else if (this.href.indexOf('27142') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663974-2_th.PNG">'); //Electronics / Cleaners
            } else if (this.href.indexOf('27133') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663675-1_th.jpg">'); //Extension Cords
            } else if (this.href.indexOf('27144') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664179-1_th.jpg">'); //Lighting and Fans
            } else if (this.href.indexOf('27124') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663775-2_th.JPG">'); //Outlets & Adapters
            } else if (this.href.indexOf('27148') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664432-1_th.jpg">'); //Struts
            } else if (this.href.indexOf('27123') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664061-1_th.jpg">'); //Wall Plates & Jacks
            } else if (this.href.indexOf('28505') !== -1) {
                $(this).prepend('<img src="/storeimages/422-832554-1_th.jpg">'); //Wall Plates & Jacks
            } else if (this.href.indexOf('28902') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665716-2_th.PNG">'); //Awls
            } else if (this.href.indexOf('28858') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665717-1_th.jpg">'); //Bars
            } else if (this.href.indexOf('28859') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665749-1_th.jpg">'); //Blades
            } else if (this.href.indexOf('28861') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665771-1_th.jpg">'); //Chisels
            } else if (this.href.indexOf('28862') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665777-1_th.jpg">'); //Clamps
            } else if (this.href.indexOf('28864') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665781-1_th.jpg">'); //Clippers
            } else if (this.href.indexOf('28865') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665784-1_th.jpg">'); //Countersinks
            } else if (this.href.indexOf('28897') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666102-1_th.PNG">'); //Cutter Wheels
            } else if (this.href.indexOf('28866') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665788-1_th.jpg">'); //Cutters
            } else if (this.href.indexOf('28867') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665791-1_th.jpg">'); //Discs
            } else if (this.href.indexOf('28903') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665734-3_th.PNG">'); //Drill Bits
            } else if (this.href.indexOf('28876') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665798-1_th.jpg">'); //Drill Index
            } else if (this.href.indexOf('28868') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665971-1_th.jpg">'); //Expanders
            } else if (this.href.indexOf('28869') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665969-1_th.jpg">'); //Extractors
            } else if (this.href.indexOf('28870') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665981-1_th.jpg">'); //Files
            } else if (this.href.indexOf('28872') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666058-1_th.jpg">'); //Hacksaw Frames
            } else if (this.href.indexOf('28873') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665997-1_th.jpg">'); //Hammers
            } else if (this.href.indexOf('28874') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665696-1_th.jpg">'); //Hoes
            } else if (this.href.indexOf('28906') !== -1) {
                $(this).prepend('<img src="/storeimages/422-831850-1_th.jpg">'); //Hooks
            } else if (this.href.indexOf('28877') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666004-1_th.jpg">'); //Knives
            } else if (this.href.indexOf('28910') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666066-1_th.jpg">'); //Nail Set
            } else if (this.href.indexOf('28879') !== -1) {
                $(this).prepend('<img src="/storeimages/422-719314-1_th.jpg">'); //Pliers
            } else if (this.href.indexOf('28881') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666047-1_th.jpg">'); //Pouches
            } else if (this.href.indexOf('28882') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666041-1_th.jpg">'); //Punch
            } else if (this.href.indexOf('28883') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665699-1_th.jpg">'); //Rakes
            } else if (this.href.indexOf('28884') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666048-1_th.jpg">'); //Riveters
            } else if (this.href.indexOf('28909') !== -1) {
                $(this).prepend('<img src="/storeimages/422-747439-1_th.PNG">'); //Rollers
            } else if (this.href.indexOf('28886') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666052-1_th.jpg">'); //Rulers and Tape Measures
            } else if (this.href.indexOf('28887') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666057-1_th.jpg">'); //Saws
            } else if (this.href.indexOf('28888') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663630-1_th.jpg">'); //Scrapers
            } else if (this.href.indexOf('28905') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665954-1_th.jpg">'); //Screw Drivers
            } else if (this.href.indexOf('28889') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665705-1_th.jpg">'); //Shears
            } else if (this.href.indexOf('28890') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665701-1_th.jpg">'); //Shovels
            } else if (this.href.indexOf('28892') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666070-1_th.jpg">'); //Snips
            } else if (this.href.indexOf('28893') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666075-1_th.jpg">'); //Squares
            } else if (this.href.indexOf('28894') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666082-1_th.jpg">'); //Taps
            } else if (this.href.indexOf('28896') !== -1) {
                $(this).prepend('<img src="/storeimages/422-665715-2_th.jpg">'); //Trowels
            } else if (this.href.indexOf('28898') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666120-1_th.jpg">'); //Wrenches
            } else if (this.href.indexOf('21506') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666416-1_th.jpg">'); //Copy Paper
            } else if (this.href.indexOf('28074') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663971-1_th.jpg">'); //Electronics / Cleaners
            } else if (this.href.indexOf('28096') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664216-1_th.jpg">'); //Fixture Lens
            } else if (this.href.indexOf('28091') !== -1) {
                $(this).prepend('<img src="/storeimages/422-664419-2_th.jpg">'); //HEAT SHRINK
            } else if (this.href.indexOf('27965') !== -1) {
                $(this).prepend('<img src="/storeimages/422-829743-1_th.jpg">'); //PIPE THREAD COMPOUND
            } else if (this.href.indexOf('27171') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663275-1_th.jpg">'); //Cleaners
            } else if (this.href.indexOf('27167') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663221-1_th.jpg">'); //Cleaning Tools
            } else if (this.href.indexOf('27585') !== -1) {
                $(this).prepend('<img src="/storeimages/422-820623-1_th.PNG">'); //SPACKLING
            } else if (this.href.indexOf('21512') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666439-2.jpg">'); //CLOSET BOLT
            } else if (this.href.indexOf('26850') !== -1) {
                $(this).prepend('<img src="/storeimages/422-809915-1_th.jpg">'); //FILTER
            } else if (this.href.indexOf('26256') !== -1) {
                $(this).prepend('<img src="/storeimages/422-798690-1_th.PNG">'); //ZOOM-LOCK
            } else if (this.href.indexOf('21506') !== -1) {
                $(this).prepend('<img src="/storeimages/422-666421-2_th.jpg">'); //Copy Paper
            } else if (this.href.indexOf('29217') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663329-1_th.jpg">'); //Grabbers
            } else if (this.href.indexOf('27173') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663561-1_th.jpg">'); //Trash / Recycling
            } else if (this.href.indexOf('28484') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663758-1_th.jpg">'); //First Aid
            } else if (this.href.indexOf('28346') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663528-1_th.jpg">'); //Distilled Water
            } else if (this.href.indexOf('28314') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663326-1_th.jpg">'); //Air Fresheners
            } else if (this.href.indexOf('28303') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663253-1_th.jpg">'); //Chalk/Whiteboard Supplies
            } else if (this.href.indexOf('28350') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663561-1_th.jpg">'); //Trash Bags/Paper Bags
            } else if (this.href.indexOf('21627') !== -1) {
                $(this).prepend('<img src="/storeimages/422-663561-1_th.jpg">'); //Trash Bags/Paper Bags
            } else if (this.href.indexOf('29706') !== -1) {
                $(this).prepend('<img src="/storeimages/422-856716-1_th.jpg">'); //TAG OUT/LOCK OUT
            }

        });
    }

    $('#hideshow').on('click', function(event) {
        $('#notice_container').toggle('show');
    });
});