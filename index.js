angular.module("app", [])
	.controller("main", function ($scope) {
		$scope.list = [["Vaultive *hiring","http://www.vaultive.com/"],["R2net","http://www.r2net.com/"],["SimilarWeb *hiring","http://www.similarweb.com/"],["FanGager *hiring","http://www.fangager.com/site/"],["RFKeeper *hiring","http://www.rfkeeper.com/"],["Panoramic Power *hiring","http://www.panpwr.com"],["Upstream Commerce","http://www.upstreamcommerce.com"],["Proleafic","http://www.proleafic.com/"],["InPact","http://www.myinpact.com"],["WebCollage *hiring","http://www.webcollage.com/"],["YCD *hiring","http://www.ycdmultimedia.com"],["SaleMove *hiring","http://salemove.com/"],["Varonis (IPO) *hiring","http://www.varonis.com"],["Ayehu *hiring","http://www.ayehu.com/"],["Bordersfree (IPO) *hiring","http://www.borderfree.com/"],["Outleads","http://www.outleads.com"],["Neebula *hiring","http://www.servicenow.com/"],["Zooz *hiring","http://www.zooz.com/"],["ActivePath","http://www.activepath.com/"],["ComQi","http://comqi.com"],["Deeplink","https://www.deeplink.me/"],["Rating Widget","http://rating-widget.com/"],["SintecMedia *hiring","http://www.sintecmedia.com/"],["iTAnalyzer","http://www.itanalyzer.net/"],["Producteev","https://www.producteev.com/"],["TriPlay *hiring","http://www.triplay.com/"],["Dyadic Security","http://www.dyadicsec.com"],["Zuznow *hiring","https://www.zuznow.com/"],["Nolio (acquired)","http://www.ca.com/us/default.aspx"],["Correlata Solutions","http://www.correlata.com"],["Vision.bi *hiring","http://www.vision.bi/"],["StructuredWeb *hiring","http://www.structuredweb.com"],["Kaminario *hiring","http://www.kaminario.com"],["Dine Market","http://www.dinemarket.com"],["RankAbove *hiring","http://www.rankabove.com"],["SQream","http://www.sqream.com"],["Signals Intelligence Group","http://www.signalsgroup.com/"],["DatArcs","http://www.datarcs.com"],["Siemplify","http://www.siemplify.co"],["WhiteSource","http://www.whitesourcesoftware.com/"],["RDV Systems","http://www.rdvsystems.com/"],["Aquant",null],["Askem","http://www.askem.com"],["Stratoscale","http://www.stratoscale.com"],["Time To Know *hiring","http://www.timetoknow.com"],["Umoove","http://www.umoove.me"],["Continuity Software","http://www.continuitysoftware.com/"],["Kinvestix","http://www.kinvestix.com"],["ClipFort","http://www.clipfort.com/"],["Friendly retailing","http://www.friendlyretailing.com"],["Phone.com *hiring","http://www.phone.com"],["Praxell","http://www.praxell.com/"],["Correlsense","http://www.correlsense.com/"],["HumanEyes","http://www.humaneyes.com/"],["JHexagon *hiring","http://www.jhexagon.com/"],["Slate Science *hiring","http://www.slatescience.com"],["Panaya (Infosys) *hiring","http://panaya.com/"],["IT Central Station","http://www.itcentralstation.com/"],["Freemius","https://freemius.com/"],["Funtactix *hiring","http://www.funtactix.com/"],["TripleIT","http://www.tripleit.com/"],["Realmatch *hiring","http://www.realmatch.com"],["Cortica *hiring","http://www.cortica.com/"],["FreshBiz","http://www.freshbizgame.com/"],["fisbo","http://fisbo.co"],["City Hive Inc","http://cityhive.net"],["wellb","https://www.wellb.me"],["applicaster","http://applicaster.com"],["Cedato","http://cedato.com"],["Re-Sec","http://www.re-sec.com/"],["OwnBackup","https://www.ownbackup.com/"],["Initech Software Service","http://initech.co.il/"],["MUGO","http://www.mugo.co"],["Rentigo","http://www.rentigo.com"],["Innovid *hiring","http://www.innovid.com/"],["Interlude *hiring","http://interlude.fm"],["OOvOO *hiring","http://www.oovoo.com/"],["Flyby Media","http://www.flybymedia.com/"],["SundaySky *hiring","http://www.sundaysky.com"],["Branovate *hiring","http://www.branovate.com/"],["Chic.TV","http://www.chic.tv/"],["Kaltura *hiring","http://corp.kaltura.com/"],["Dynamix","http://www.dynamicvideo.com/"],["Wochit *hiring","http://www.wochit.com/"],["Magisto","http://www.Magisto.com"],["PlaySight","https://www.playsight.com/"],["LiveU *hiring","http://www.liveu.tv/"],["Wedeeo","http://www.wedeeo.com/"],["You","http://blog.younow.com/"],["Anyclip *hiring","http://www.anyclip.com/"],["CRC Media","http://www.crcmedia.com"],["Vidyo *hiring","http://www.vidyo.com/"],["Adap.TV (AOL) *hiring","http://adap.tv/"],["Clinch","http://www.clinch.co/"],["iDTV","http://idtv.me/"],["Eyeview *hiring","http://www.eyeviewdigital.com"],["Inneractive","http://www.inner-active.com"],["AniView INC","http://aniview.com/"],["Nuvola","http://nuvoladigital.com/"],["Nexar inc.","https://www.getnexar.com/"],["Wibbitz","http://www.wibbitz.com/"],["SportsGuru","http://sportsguru.us"],["LocalMaven","http://www.localmaven.com/"],["Emmett Global","http://www.emmettglobal.com/"],["MOBurst","http://moburst.com/"],["Crush Mobile *hiring","http://mobile.crush.com/"],["KinderApp",""],["SEEN","http://seen.co/"],["FeedMe","http://letsfeedme.com/"],["Magnetic","http://www.magnetic.com/"],["Wivo","http://www.wivo.cl/en"],["SwitchOrNot","http://switchornot.com/"],["Israeli Startups NYC","http://israelistartupsnyc.com/"],["Globaloria *hiring","http://www.globaloria.com"],["DNA-7 *hiring","http://dna-7.com/"],["OKpanda *hiring","http://www.okpanda.com/home_english"],["Hippotec","http://www.hippotec.com"],["EverBlock","http://www.everblocksystems.com/"],["DandyLoop","http://www.dandyloop.com"],["Codega","http://expert.mycodega.com/"],["youAPPi","http://www.youappi.com/"],["Oliver *hiring","http://www.getoliver.com/"],["ZUtA Labs","http://www.zutalabs.com/"],["Cyber Security Plan","http://www.cybersecurityplan.com/"],["Lemonade","http://www.lemonade.com/"],["SolarKal","http://www.solarkal.com"],["Jethrodata","http://jethrodata.com/"],["SiSense *hiring","http://www.sisense.com/"],["tracx","http://www.tracx.com/"],["XpoLog","http://www.xpolog.com/"],["Optimove","http://www.optimove.com"],["qbeats inc","http://www.qbeats.com"],["ThetaRay","http://www.thetaray.com/"],["Outernets.co","http://outernets.co"],["Riskified","http://www.riskified.com/"],["Atlis ","http://www.atlis.me"],["Nanit","http://www.nanit.com/"],["ICU Sensor","http://www.icusensor.com/"],["Como *hiring","http://www.como.com/"],["SeatServe","http://seatserve.com"],["AppCard *hiring","http://www.appcard.com"],["Superr","http://superr.io"],["WiFi Map LLC","http://wifimap.io"],["Routier","http://www.routier.io"],["CARDEA SCIENCES",null],["Yotpo *hiring","https://www.yotpo.com/"],["Funnster","https://funnster.com/"],["BETTER Mobile Security","http://better.mobi/"],["As You Stay","http://www.asyoustay.com"],["queclick","http://www.queclickapp.com/"],["Wix (IPO) *hiring","http://www.wix.com"],["Roomer Travel","http://www.roomertravel.com"],["Payoneer","http://www.payoneer.com/"],["Tversity","http://tversity.com/"],["Apartable","http://apartable.com/"],["Unpakt *hiring","https://www.unpakt.com/"],["I Know The Chef","http://iknowthechef.com/"],["Via *hiring","http://ridewithvia.com/"],["Farmigo *hiring","http://www.farmigo.com/"],["MyBuilding (acquired)","http://public.mybuilding.org/"],["Vroom *hiring","https://www.vroom.com/"],["Wanderant","http://hello.wanderant.com/"],["ArtSetters","http://www.artsetters.com"],["My Registry","http://www.MyRegistry.com"],["LiveLux","http://www.livelux.com"],["Tailor Brnads *hiring","https://www.tailorbrands.com/"],["OnlineOrdering","http://www.onlineordering.com/"],["Worthy","http://www.worthy.com"],["Kuhbe","http://www.kuhbe.com"],["Brayola *hiring","http://brayola.com/"],["Stylit","https://mystylit.com/"],["Take Me Out NYC","http://www.takemeoutnyc.com"],["Keep America","http://keepamerica.com/shop/"],["Rumble *hiring","http://www.rumble.me"],["Backed Inc Personal Loans","https://www.backedinc.com/"],["Otherz.com","http://www.otherz.com"],["Sudzy","http://www.getsudzy.com"],["Diggz","http://www.diggz.co"],["Debitsize","http://www.debitize.com/"],["Earnix *hiring","http://www.earnix.com/"],["BEHALF *hiring","https://www.behalf.com/"],["FeeX *hiring","http://www.feex.com"],["Personetics *hiring","http://www.personetics.com/"],["BillGuard (Prosper)","http://www.billguard.com"],["Splitit (Formerly PayItSimple) *hiring","http://www.payitsimple.com/"],["Cinchkey Inc.","http://www.cinchkey.com"],["HeadSense","http://www.head-sense-med.com/"],["Viora","http://www.vioramed.com/"],["Fitango","http://www.fitango.com/home.php"],["Crossix *hiring","http://www.crossix.com/"],["Telesofia Medical *hiring","http://www.telesofia.com/"],["AposTherapy *Hiring","http://apostherapy.com/"],["medCPU","http://www.medcpu.com/"],["Bkstg","https://bkstg.com/"],["Splacer","http://www.splacer.co/"],["Apester","http://www.apester.com"],["Vocativ","http://www.vocativ.com/"],["FST Biometrics *hiring","http://fstbm.com/"],["Aorato (Acquired by Microsoft)","http://www.aorato.com/"],["Comilion","http://www.comilion.com"],["NativeFlow *hiring","http://appdome.com/"],["Checkmarx *Hiring","http://www.checkmarx.com/"],["LightCyber","http://www.lightcyber.com"],["Secure Islands *hiring","http://www.secureislands.com"],["ObserveIT *hiring","http://www.observeit.com"],["Avanan","http://www.avanan.com/"],["Meetey","http://meetey.com/"],["Dynamic Yields *hiring","https://www.dynamicyield.com/"],["Credifi","https://www.credifi.com"],["Real","http://www.joinreal.com/"],["Visit.org","http://www.visit.org"],["Prooffix, Inc.","https://www.prooffix.com"],["Wander","http://www.wanderapp.me?ref=mapped"],["SocialTerminals *hiring","http://socialterminals.com/"],["CheckM8","http://www.checkm8.com/"],["EZBZ","https://www.myezbz.com/"],["YapTap Inc.","http://www.yaptapapp.com"],["Kenshoo *hiring","http://www.kenshoo.com/"],["The Unlimited","http://theunlimitedmag.com/"],["PlayBuzz *hiring","https://www.playbuzz.com/"],["Mobilibuy","http://Mobilbuy enable consumers to buy  On-the-go smart and easy using their smartphone"],["Spark Flow (Undertone)","http://www.sparkflow.net/"],["Bride Click *Hiring","http://brideclick.net/"],["Zula","http://zulaapp.com/"],["ConvertMedia *hiring","http://convertmedia.com/"],["Todacell","http://www.todacell.com"],["Tripda","http://www.tripda.com/"],["PopMeApp","http://www.popmeapp.com/"],["Fl3ur","http://www.fl3ur.com/"],["DoubleVerify *hiring","http://www.doubleverify.com"],["Keepy","http://www.keepy.me/"],["Powerlinx","http://www.powerlinx.com/"],["BoredomTherapy","http://boredomtherapy.com/"],["Cleanly *Hiring","http://www.getcleanly.com#sthash.v9qjprti.dpuf"],["StayBay","https://www.staybay.com/"],["Remarkety","http://www.remarkety.com/"],["flok *hiring","http://www.flok.com/"],["Wishi","http://wishi.me/"],["AppsFlyer *hiring","http://www.appsflyer.com"],["Switch *hiring","http://www.switchapp.com/"],["Bizzabo *hiring","http://www.bizzabo.com/"],["Music Wagon","http://www.musicwagon.tv"],["TalkSpace *hiring","http://www.talkspace.com"],["Wizpert *hiring","http://www.wizpert.com"],["Lightricks","http://www.lightricks.com/"],["myThings *hiring","http://www.mythings.com"],["Peer39 (Sizmek) *hiring","http://www.peer39.com"],["Outbrain *hiring","http://www.outbrain.com"],["EyePlay","http://eyeplay.info/"],["Compass *hiring","https://www.urbancompass.com/"],["Datorama *hiring","http://www.datorama.com/"],["Swifto","http://www.swifto.com"],["Adextent","http://adextent.com"],["Powermat *hiring","http://www.powermat.com/"],["HyPR","http://www.hyprbrands.com"],["Equala","http://www.equala.fm/"],["Pango","http://www.mypango.com"],["The Artery VFX","http://www.thearteryvfx.com/"],["SeatID","http://www.seatid.com/"],["Writers Out","http://www.writersout.com"],["Snoox","https://www.snoox.com/"],["StartApp *hiring","http://www.startapp.com/"],["Oddcast *hiring","http://www.oddcast.com"],["GooodJob","http://gooodjob.com/"],["The Melody Book","http://themelodybook.com/"],["CUPS *hiring","http://www.cupsapp.com"],["AreaOne","http://www.socialclicks.com"],["Exelate (Nielsen) *hiring","http://www.exelate.com"],["Kontera (Amobee) *hiring","http://www.amobee.com/index.shtml"],["Gett *hiring","http://gett.com/"],["Fiverr *hiring","http://www.fiverr.com"],["Taykey *hiring","http://www.taykey.com"],["Alcohoot","http://www.alcohoot.com/"],["Blipit","http://blipitapp.com/"],["AppMyDay *hiring","http://www.appmyday.com/"],["MyCheck *hiring","http://www.mycheckapp.com"],["eToro","http://www.etoro.com/"],["KIDDOapp","http://www.kiddoapp.me/"],["Hyperactivate","http://www.hyperactivate.com/"],["GradTrain","http://www.gradtrain.com"],["MoveMent","http://www.movement-app.com"],["Connatix *hiring","http://www.connatix.com/"],["Waze *hiring","http://www.waze.com/"],["Clipix *hiring","http://www.clipix.com"],["Datonics *hiring","http://datonics.com/"],["iApps","http://www.iappstechnologies.com"],["Taboola *hiring","http://www.taboola.com/"],["Upfront Media","http://www.legolas-media.com"],["SaleFreaks","http://www.salefreaks.com/"],["FOCUSFEED","http://www.focusfeed.com"],["Propcy","http://propcy.com/"],["Volleto Inc.","http://www.volleto.com"],["LifeBEAM","http://life-beam.com/"],["American Volume","http://www.americanvolume.com/"],["PLYmedia","http://www.plymedia.com/"]]
			.sort((a,b) => a[0].localeCompare(b[0]))
			.map(function (item) {
				var indexOf = item[0].indexOf(" *");
				if (indexOf !== -1) {
					item[0] = item[0].substring(0, indexOf)
				}
				return item;
			});
			
		$scope.metadata = JSON.parse(window.localStorage.getItem("metadata")) || {};
		$scope.save = function () {
			window.localStorage.setItem("metadata", JSON.stringify($scope.metadata));
		}
		
		$scope.countSent = function () {
			return $scope.list.filter(function(item) { return $scope.metadata[item[1]] && $scope.metadata[item[1]].hasSent; }).length;
		}
		
		$scope.flip = function (key) {
			$scope.metadata[key] = $scope.metadata[key] || {};
			$scope.metadata[key].notInteresting = !$scope.metadata[key].notInteresting;
			$scope.save();
		};
	});