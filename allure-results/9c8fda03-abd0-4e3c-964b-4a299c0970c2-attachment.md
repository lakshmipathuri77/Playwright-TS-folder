# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createCase.spec.ts >> Create new support case using POM
- Location: tests\createCase.spec.ts:7:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Virtual Storage Platform (VSP)') resolved to 2 elements:
    1) <span class="cell-text" lwc-3cgb61abhas="" title="Virtual Storage Platform (VSP)">Virtual Storage Platform (VSP)</span> aka getByLabel('02i1J000005OnXZQA0 -').getByText('Virtual Storage Platform (VSP)')
    2) <span class="cell-text" lwc-3cgb61abhas="" title="Virtual Storage Platform (VSP)">Virtual Storage Platform (VSP)</span> aka getByLabel('02i1J000005OnVtQAK -').getByText('Virtual Storage Platform (VSP)')

Call log:
  - waiting for getByText('Virtual Storage Platform (VSP)')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e11]:
    - link "Skip to Main" [ref=e12] [cursor=pointer]:
      - /url: javascript:void(0);
    - banner [ref=e13]:
      - generic [ref=e14]:
        - banner "Site header" [ref=e23]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.hitachi.com/
          - generic [ref=e40]:
            - textbox "Search..." [ref=e42]
            - img [ref=e44]
          - button "English Select your language" [ref=e51] [cursor=pointer]:
            - text: English
            - img [ref=e53]
            - generic [ref=e56]: Select your language
        - generic [ref=e66]:
          - paragraph [ref=e74]: Hitachi Vantara Support Connect
          - navigation [ref=e83]:
            - list [ref=e84]:
              - listitem [ref=e85]:
                - link "Home" [ref=e86] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e88]:
                - button "My Account" [ref=e89] [cursor=pointer]
              - listitem [ref=e91]:
                - button "Resources" [ref=e92] [cursor=pointer]
              - listitem [ref=e94]:
                - button "Learn" [ref=e95] [cursor=pointer]
          - button "User" [ref=e103]:
            - img "User" [ref=e104] [cursor=pointer]
    - main [ref=e105]:
      - generic [ref=e112]:
        - heading "New Product Support Case" [level=1] [ref=e123]
        - generic [ref=e133]:
          - generic [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e137]:
                - paragraph [ref=e141]: "1"
                - paragraph [ref=e142]: Select Product
              - img [ref=e144]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - paragraph [ref=e150]: "2"
                - paragraph [ref=e151]: Case Details
              - img [ref=e153]
            - generic [ref=e154]:
              - generic [ref=e155]:
                - paragraph [ref=e159]: "3"
                - paragraph [ref=e160]: Case Information
              - img [ref=e162]
            - generic [ref=e164]:
              - paragraph [ref=e168]: "4"
              - paragraph [ref=e169]: Review & Submit
          - generic [ref=e172]:
            - generic [ref=e173]:
              - heading "Which product do you need help with?" [level=1] [ref=e174]
              - heading "Select the product or solution related to your support request." [level=2] [ref=e175]
            - generic [ref=e178]:
              - generic [ref=e179]:
                - searchbox "Search by product name or serial number..." [active] [ref=e181]: vsp
                - img [ref=e186] [cursor=pointer]
              - grid "Search results" [ref=e192]:
                - generic [ref=e193]:
                  - text: </col>
                  - text: </col>
                  - text: </col>
                  - text: </col>
                  - text: </col>
                - rowgroup [ref=e199]:
                  - row "Serial Number Product Nickname Site Status" [ref=e200]:
                    - columnheader "Serial Number" [ref=e201]:
                      - paragraph [ref=e204]: Serial Number
                    - columnheader "Product" [ref=e205]:
                      - paragraph [ref=e208]: Product
                    - columnheader "Nickname" [ref=e209]:
                      - paragraph [ref=e212]: Nickname
                    - columnheader "Site" [ref=e213]:
                      - paragraph [ref=e216]: Site
                    - columnheader "Status" [ref=e217]:
                      - paragraph [ref=e220]: Status
                - rowgroup [ref=e221]:
                  - row "02i1J000005OnXZQA0 - Discontinue Maintenance" [ref=e222] [cursor=pointer]:
                    - gridcell "86398" [ref=e223]:
                      - generic "86398" [ref=e224]
                    - gridcell "Virtual Storage Platform (VSP)" [ref=e225]:
                      - generic "Virtual Storage Platform (VSP)" [ref=e226]
                    - gridcell "-" [ref=e227]:
                      - generic "-" [ref=e228]
                    - gridcell "Allied Irish Bank plc 1" [ref=e229]:
                      - generic "Allied Irish Bank plc 1" [ref=e230]
                    - gridcell "Discontinue Maintenance" [ref=e231]:
                      - generic "Discontinue Maintenance" [ref=e232]
                  - row "02i1J000005OnVtQAK - Discontinue Maintenance" [ref=e233] [cursor=pointer]:
                    - gridcell "86424" [ref=e234]:
                      - generic "86424" [ref=e235]
                    - gridcell "Virtual Storage Platform (VSP)" [ref=e236]:
                      - generic "Virtual Storage Platform (VSP)" [ref=e237]
                    - gridcell "-" [ref=e238]:
                      - generic "-" [ref=e239]
                    - gridcell "Allied Irish Bank plc 1" [ref=e240]:
                      - generic "Allied Irish Bank plc 1" [ref=e241]
                    - gridcell "Discontinue Maintenance" [ref=e242]:
                      - generic "Discontinue Maintenance" [ref=e243]
                  - row "02i2S00000A4r6fQAB - Discontinue Maintenance" [ref=e244] [cursor=pointer]:
                    - gridcell "07B201908120912120" [ref=e245]:
                      - generic "07B201908120912120" [ref=e246]
                    - gridcell "VSP G1X00 and VSP F1500" [ref=e247]:
                      - generic "VSP G1X00 and VSP F1500" [ref=e248]
                    - gridcell "-" [ref=e249]:
                      - generic "-" [ref=e250]
                    - gridcell "Allied Irish Bank plc 1" [ref=e251]:
                      - generic "Allied Irish Bank plc 1" [ref=e252]
                    - gridcell "Discontinue Maintenance" [ref=e253]:
                      - generic "Discontinue Maintenance" [ref=e254]
                  - row "02i2S00000A4r6VQAR - Discontinue Maintenance" [ref=e255] [cursor=pointer]:
                    - gridcell "07B201908120912118" [ref=e256]:
                      - generic "07B201908120912118" [ref=e257]
                    - gridcell "VSP G1X00 and VSP F1500" [ref=e258]:
                      - generic "VSP G1X00 and VSP F1500" [ref=e259]
                    - gridcell "-" [ref=e260]:
                      - generic "-" [ref=e261]
                    - gridcell "Allied Irish Bank plc 1" [ref=e262]:
                      - generic "Allied Irish Bank plc 1" [ref=e263]
                    - gridcell "Discontinue Maintenance" [ref=e264]:
                      - generic "Discontinue Maintenance" [ref=e265]
                  - row "02i2S00000A2fZiQAJ - Discontinue Maintenance" [ref=e266] [cursor=pointer]:
                    - gridcell "07B201908120912118" [ref=e267]:
                      - generic "07B201908120912118" [ref=e268]
                    - gridcell "VSP G1X00 and VSP F1500" [ref=e269]:
                      - generic "VSP G1X00 and VSP F1500" [ref=e270]
                    - gridcell "-" [ref=e271]:
                      - generic "-" [ref=e272]
                    - gridcell "Allied Irish Bank plc 1" [ref=e273]:
                      - generic "Allied Irish Bank plc 1" [ref=e274]
                    - gridcell "Discontinue Maintenance" [ref=e275]:
                      - generic "Discontinue Maintenance" [ref=e276]
                  - row "02i1J000004MEubQAG - Discontinue Maintenance" [ref=e277] [cursor=pointer]:
                    - gridcell "58563" [ref=e278]:
                      - generic "58563" [ref=e279]
                    - gridcell "VSP G1X00 and VSP F1500" [ref=e280]:
                      - generic "VSP G1X00 and VSP F1500" [ref=e281]
                    - gridcell "-" [ref=e282]:
                      - generic "-" [ref=e283]
                    - gridcell "Allied Irish Bank plc 1" [ref=e284]:
                      - generic "Allied Irish Bank plc 1" [ref=e285]
                    - gridcell "Discontinue Maintenance" [ref=e286]:
                      - generic "Discontinue Maintenance" [ref=e287]
                  - row "02i1J000004IQhHQAW - Discontinue Maintenance" [ref=e288] [cursor=pointer]:
                    - gridcell "420664" [ref=e289]:
                      - generic "420664" [ref=e290]
                    - gridcell "VSP Gx00 and VSP Fx00" [ref=e291]:
                      - generic "VSP Gx00 and VSP Fx00" [ref=e292]
                    - gridcell "-" [ref=e293]:
                      - generic "-" [ref=e294]
                    - gridcell "MITSUBISHI ELECTRIC DE MEXICO, SA DE CV" [ref=e295]:
                      - generic "MITSUBISHI ELECTRIC DE MEXICO, SA DE CV" [ref=e296]
                    - gridcell "Discontinue Maintenance" [ref=e297]:
                      - generic "Discontinue Maintenance" [ref=e298]
                  - row "02i1J000004INVWQA4 - Discontinue Maintenance" [ref=e299] [cursor=pointer]:
                    - gridcell "410621" [ref=e300]:
                      - generic "410621" [ref=e301]
                    - gridcell "VSP Gx00 and VSP Fx00" [ref=e302]:
                      - generic "VSP Gx00 and VSP Fx00" [ref=e303]
                    - gridcell "-" [ref=e304]:
                      - generic "-" [ref=e305]
                    - gridcell "MITSUBISHI ELECTRIC DE MEXICO, SA DE CV" [ref=e306]:
                      - generic "MITSUBISHI ELECTRIC DE MEXICO, SA DE CV" [ref=e307]
                    - gridcell "Discontinue Maintenance" [ref=e308]:
                      - generic "Discontinue Maintenance" [ref=e309]
                  - row "02i1J000004nvcsQAA - Installed" [ref=e310] [cursor=pointer]:
                    - gridcell "471333" [ref=e311]:
                      - generic "471333" [ref=e312]
                    - gridcell "VSP Gx00 and VSP Fx00" [ref=e313]:
                      - generic "VSP Gx00 and VSP Fx00" [ref=e314]
                    - gridcell "-" [ref=e315]:
                      - generic "-" [ref=e316]
                    - gridcell "Allied Irish Bank plc 1" [ref=e317]:
                      - generic "Allied Irish Bank plc 1" [ref=e318]
                    - gridcell "Installed" [ref=e319]:
                      - generic "Installed" [ref=e320]
                  - row "02i1J000004MAfbQAG - Discontinue Maintenance" [ref=e321] [cursor=pointer]:
                    - gridcell "480096" [ref=e322]:
                      - generic "480096" [ref=e323]
                    - gridcell "VSP Gx00 and VSP Fx00" [ref=e324]:
                      - generic "VSP Gx00 and VSP Fx00" [ref=e325]
                    - gridcell "-" [ref=e326]:
                      - generic "-" [ref=e327]
                    - gridcell "Allied Irish Bank plc 1" [ref=e328]:
                      - generic "Allied Irish Bank plc 1" [ref=e329]
                    - gridcell "Discontinue Maintenance" [ref=e330]:
                      - generic "Discontinue Maintenance" [ref=e331]
                  - row "02icx000001mVNHAA2 - Installed" [ref=e332] [cursor=pointer]:
                    - gridcell "41971" [ref=e333]:
                      - generic "41971" [ref=e334]
                    - gridcell "VSP 5000 Series" [ref=e335]:
                      - generic "VSP 5000 Series" [ref=e336]
                    - gridcell "-" [ref=e337]:
                      - generic "-" [ref=e338]
                    - gridcell "MITSUBISHI ELECTRIC DE MEXICO, SA DE CV" [ref=e339]:
                      - generic "MITSUBISHI ELECTRIC DE MEXICO, SA DE CV" [ref=e340]
                    - gridcell "Installed" [ref=e341]:
                      - generic "Installed" [ref=e342]
                  - row "02icx000001qYV4AAM - Installed" [ref=e343] [cursor=pointer]:
                    - gridcell "41982" [ref=e344]:
                      - generic "41982" [ref=e345]
                    - gridcell "VSP 5000 Series" [ref=e346]:
                      - generic "VSP 5000 Series" [ref=e347]
                    - gridcell "-" [ref=e348]:
                      - generic "-" [ref=e349]
                    - gridcell "Allied Irish Bank plc 1" [ref=e350]:
                      - generic "Allied Irish Bank plc 1" [ref=e351]
                    - gridcell "Installed" [ref=e352]:
                      - generic "Installed" [ref=e353]
                  - row "02i2S00000A4sNxQAJ - Installed" [ref=e354] [cursor=pointer]:
                    - gridcell "30937" [ref=e355]:
                      - generic "30937" [ref=e356]
                    - gridcell "VSP 5000 Series" [ref=e357]:
                      - generic "VSP 5000 Series" [ref=e358]
                    - gridcell "-" [ref=e359]:
                      - generic "-" [ref=e360]
                    - gridcell "Allied Irish Bank plc 1" [ref=e361]:
                      - generic "Allied Irish Bank plc 1" [ref=e362]
                    - gridcell "Installed" [ref=e363]:
                      - generic "Installed" [ref=e364]
                  - row "02i2S00000A4r9cQAB - Installed" [ref=e365] [cursor=pointer]:
                    - gridcell "XM45C-1408" [ref=e366]:
                      - generic "XM45C-1408" [ref=e367]
                    - gridcell "VSP 5000 Series" [ref=e368]:
                      - generic "VSP 5000 Series" [ref=e369]
                    - gridcell "-" [ref=e370]:
                      - generic "-" [ref=e371]
                    - gridcell "Allied Irish Bank plc 1" [ref=e372]:
                      - generic "Allied Irish Bank plc 1" [ref=e373]
                    - gridcell "Installed" [ref=e374]:
                      - generic "Installed" [ref=e375]
                  - row "02icx000000oO5aAAE - Installed" [ref=e376] [cursor=pointer]:
                    - gridcell "C2A1KW2441291" [ref=e377]:
                      - generic "C2A1KW2441291" [ref=e378]
                    - gridcell "VSP One File 30 Series" [ref=e379]:
                      - generic "VSP One File 30 Series" [ref=e380]
                    - gridcell "-" [ref=e381]:
                      - generic "-" [ref=e382]
                    - gridcell "Allied Irish Bank plc 1" [ref=e383]:
                      - generic "Allied Irish Bank plc 1" [ref=e384]
                    - gridcell "Installed" [ref=e385]:
                      - generic "Installed" [ref=e386]
                  - row "02icx000000oO5ZAAU - Installed" [ref=e387] [cursor=pointer]:
                    - gridcell "C2A1KW2502176" [ref=e388]:
                      - generic "C2A1KW2502176" [ref=e389]
                    - gridcell "VSP One File 30 Series" [ref=e390]:
                      - generic "VSP One File 30 Series" [ref=e391]
                    - gridcell "-" [ref=e392]:
                      - generic "-" [ref=e393]
                    - gridcell "Allied Irish Bank plc 1" [ref=e394]:
                      - generic "Allied Irish Bank plc 1" [ref=e395]
                    - gridcell "Installed" [ref=e396]:
                      - generic "Installed" [ref=e397]
                  - row "02icx000000Uiu6AAC - Installed" [ref=e398] [cursor=pointer]:
                    - gridcell "C2A1KW2433074" [ref=e399]:
                      - generic "C2A1KW2433074" [ref=e400]
                    - gridcell "VSP One File 30 Series" [ref=e401]:
                      - generic "VSP One File 30 Series" [ref=e402]
                    - gridcell "-" [ref=e403]:
                      - generic "-" [ref=e404]
                    - gridcell "Allied Irish Bank plc 1" [ref=e405]:
                      - generic "Allied Irish Bank plc 1" [ref=e406]
                    - gridcell "Installed" [ref=e407]:
                      - generic "Installed" [ref=e408]
                  - row "02icx000000Uiu5AAC - Installed" [ref=e409] [cursor=pointer]:
                    - gridcell "C2A1KW2441280" [ref=e410]:
                      - generic "C2A1KW2441280" [ref=e411]
                    - gridcell "VSP One File 30 Series" [ref=e412]:
                      - generic "VSP One File 30 Series" [ref=e413]
                    - gridcell "-" [ref=e414]:
                      - generic "-" [ref=e415]
                    - gridcell "Allied Irish Bank plc 1" [ref=e416]:
                      - generic "Allied Irish Bank plc 1" [ref=e417]
                    - gridcell "Installed" [ref=e418]:
                      - generic "Installed" [ref=e419]
                  - row "02iaZ00000Bix7tQAB - Installed" [ref=e420] [cursor=pointer]:
                    - gridcell "C2A1KW2529268" [ref=e421]:
                      - generic "C2A1KW2529268" [ref=e422]
                    - gridcell "VSP One File 30 Series" [ref=e423]:
                      - generic "VSP One File 30 Series" [ref=e424]
                    - gridcell "-" [ref=e425]:
                      - generic "-" [ref=e426]
                    - gridcell "Allied Irish Bank plc 1" [ref=e427]:
                      - generic "Allied Irish Bank plc 1" [ref=e428]
                    - gridcell "Installed" [ref=e429]:
                      - generic "Installed" [ref=e430]
                  - row "02iaZ00000Bix7sQAB - Installed" [ref=e431] [cursor=pointer]:
                    - gridcell "C2A1KW2529192" [ref=e432]:
                      - generic "C2A1KW2529192" [ref=e433]
                    - gridcell "VSP One File 30 Series" [ref=e434]:
                      - generic "VSP One File 30 Series" [ref=e435]
                    - gridcell "-" [ref=e436]:
                      - generic "-" [ref=e437]
                    - gridcell "Allied Irish Bank plc 1" [ref=e438]:
                      - generic "Allied Irish Bank plc 1" [ref=e439]
                    - gridcell "Installed" [ref=e440]:
                      - generic "Installed" [ref=e441]
                  - row "02iaZ00000Ajqi5QAB - Installed" [ref=e442] [cursor=pointer]:
                    - gridcell "HVOO310000013" [ref=e443]:
                      - generic "HVOO310000013" [ref=e444]
                    - gridcell "VSP One Object" [ref=e445]:
                      - generic "VSP One Object" [ref=e446]
                    - gridcell "-" [ref=e447]:
                      - generic "-" [ref=e448]
                    - gridcell "Allied Irish Bank plc 1" [ref=e449]:
                      - generic "Allied Irish Bank plc 1" [ref=e450]
                    - gridcell "Installed" [ref=e451]:
                      - generic "Installed" [ref=e452]
          - generic [ref=e453]:
            - button "Cancel" [ref=e454] [cursor=pointer]:
              - generic [ref=e457]: Cancel
            - button "Next" [disabled] [ref=e459]:
              - generic [ref=e461]: Next
    - contentinfo [ref=e462]:
      - generic [ref=e463]:
        - generic [ref=e473]:
          - generic [ref=e482]:
            - link "Hitachi Vantara" [ref=e483] [cursor=pointer]:
              - /url: https://hitachivantara.com
              - img "Hitachi Vantara" [ref=e484]
            - list [ref=e485]:
              - listitem [ref=e486]:
                - link "Follow us on Twitter" [ref=e487] [cursor=pointer]:
                  - /url: https://twitter.com/HitachiVantara
                  - img "Follow us on Twitter" [ref=e488]
              - listitem [ref=e489]:
                - link "Follow us on Facebook" [ref=e490] [cursor=pointer]:
                  - /url: https://www.facebook.com/HitachiVantara/
                  - img "Follow us on Facebook" [ref=e491]
              - listitem [ref=e492]:
                - link "Follow us on Linkedin" [ref=e493] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hitachi-vantara
                  - img "Follow us on Linkedin" [ref=e494]
              - listitem [ref=e495]:
                - link "Follow us on Youtube" [ref=e496] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/HitachiVantara
                  - img "Follow us on Youtube" [ref=e497]
              - listitem [ref=e498]:
                - link "Follow us on Instagram" [ref=e499] [cursor=pointer]:
                  - /url: https://www.instagram.com/hitachivantara/
                  - img "Follow us on Instagram" [ref=e500]
          - generic [ref=e506]:
            - generic [ref=e511]:
              - generic [ref=e518]:
                - generic:
                  - paragraph
                - paragraph [ref=e520]: EXPLORE
                - link "Support Website Overview" [ref=e522] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403030000319
                  - paragraph [ref=e524]: Support Website Overview
                - link "Hitachi Vantara Products" [ref=e526] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/products/storage-platforms
                  - paragraph [ref=e528]: Hitachi Vantara Products
                - link "Pentaho & Lumada Resources" [ref=e530] [cursor=pointer]:
                  - /url: https://support.pentaho.com/hc/en-us
                  - paragraph [ref=e532]: Pentaho & Lumada Resources
                - link "Customer Support Services" [ref=e534] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/customer-support
                  - paragraph [ref=e536]: Customer Support Services
                - link "Training & Certification" [ref=e538] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/learning/training
                  - paragraph [ref=e540]: Training & Certification
              - generic [ref=e548]:
                - paragraph [ref=e550]: INFORMATION
                - link "Product Documentation" [ref=e552] [cursor=pointer]:
                  - /url: https://docs.hitachivantara.com/
                  - paragraph [ref=e554]: Product Documentation
                - link "Product Lifecycle Matrix" [ref=e556] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249
                  - paragraph [ref=e558]: Product Lifecycle Matrix
                - link "Product Compatibility" [ref=e560] [cursor=pointer]:
                  - /url: https://compatibility.hitachivantara.com/
                  - paragraph [ref=e562]: Product Compatibility
                - link "Customer Support Terms" [ref=e564] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/specifications/hitachi-support-service-descriptions-and-deliverables.pdf
                  - paragraph [ref=e566]: Customer Support Terms
                - link "Global Services Area" [ref=e568] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/datasheet/geographic-service-coverage.pdf
                  - paragraph [ref=e570]: Global Services Area
            - generic [ref=e576]:
              - generic [ref=e583]:
                - paragraph [ref=e585]: SUPPORT
                - link "Data Collection" [ref=e587] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930123652333
                  - paragraph [ref=e589]: Data Collection
                - link "Support Questions" [ref=e591] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930143145580
                  - paragraph [ref=e593]: Support Questions
                - link "Security Advisories" [ref=e595] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=241403050017684
                  - paragraph [ref=e597]: Security Advisories
                - link "Knowledge" [ref=e599] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/ss/?guest=0
                  - paragraph [ref=e601]: Knowledge
              - generic [ref=e609]:
                - paragraph [ref=e611]: GET IN TOUCH
                - link "Careers" [ref=e613] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/company/careers.html
                  - paragraph [ref=e615]: Careers
                - link "Contact Support" [ref=e617] [cursor=pointer]:
                  - /url: /contact-us
                  - paragraph [ref=e619]: Contact Support
                - link "Partner Contact" [ref=e621] [cursor=pointer]:
                  - /url: https://hitachivantara.com
                  - paragraph [ref=e623]: Partner Contact
                - link "Partner Locator" [ref=e625] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/partners/partner-locator
                  - paragraph [ref=e627]: Partner Locator
        - generic [ref=e636]:
          - paragraph [ref=e644]: © Hitachi Vantara LLC 2026. All Rights Reserved.
          - list [ref=e654]:
            - listitem [ref=e655]:
              - link "Terms of Use" [ref=e656] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/terms-of-use
            - listitem [ref=e657]:
              - link "Privacy Policy" [ref=e658] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - listitem [ref=e659]:
              - link "Legal" [ref=e660] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal
  - button "Hello, have a question? Let’s chat." [ref=e666] [cursor=pointer]:
    - img [ref=e668]
  - button "Open Survey" [ref=e672] [cursor=pointer]:
    - generic [ref=e673]: Feedback
```

# Test source

```ts
  1  | import { Page, expect,Locator } from "@playwright/test";
  2  | 
  3  | export class CasePage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async searchProduct(product: string) {
  7  |     await this.page.getByRole("searchbox").fill(product);
> 8  |   await this.page.getByText("Virtual Storage Platform (VSP)").click();
     |                                                               ^ Error: locator.click: Error: strict mode violation: getByText('Virtual Storage Platform (VSP)') resolved to 2 elements:
  9  | }
  10 |     
  11 | async selectStorageOption(label: string, option: string) {
  12 |   
  13 |   const dropdown = this.page.getByLabel(label);
  14 |   await dropdown.getByText(option).click();
  15 | }
  16 | 
  17 |     /*await this.page.getByText("Virtual Storage Platform (VSP)").click();
  18 |     await this.page.getByLabel(label).getByText(Option).click();
  19 |     await this.page.getByRole("button", { name: "Next" }).click();
  20 |   }*/
  21 | 
  22 |   async selectHardwareIssue() {
  23 |     await this.page.getByRole("button", { name: "Hardware For issues related" }).click();
  24 |   }
  25 | 
  26 |   async fillCaseDetails(summary: string, details: string) {
  27 |     await this.page.getByRole("textbox", { name: /brief summary/i }).fill(summary);
  28 |     await this.page.getByRole("textbox", { name: /Provide details/i }).fill(details);
  29 |   }
  30 | 
  31 |   async selectImpact(option: string) {
  32 |     const dropdown = this.page.locator("c-sc-generic-dropdown-field", {
  33 |       hasText: "Does this issue impact your"
  34 |     });
  35 | 
  36 |     await dropdown.getByRole("button", { name: "Please select an option" }).click();
  37 |     await this.page.getByRole("option", { name: option, exact: true }).click();
  38 |     await expect(dropdown).toContainText(option);
  39 |   }
  40 | 
  41 |   async selectProduction(option: string) {
  42 |     await this.page.locator("c-sc-generic-dropdown-field", {
  43 |       hasText: "Is your production"
  44 |     }).getByRole("button", { name: "Please select an option" }).click();
  45 | 
  46 |     await this.page.getByText(option, { exact: true }).click();
  47 |   }
  48 | 
  49 |   async clickNext() {
  50 |     await this.page.getByRole("button", { name: "Next" }).click();
  51 |   }
  52 | 
  53 |   async selectSupportHours(hours: string) {
  54 |     await this.page.getByRole("button", { name: "Please select an option" }).click();
  55 |     await this.page.getByText(hours).click();
  56 |   }
  57 | 
  58 |   async submitCase() {
  59 |     await this.page.getByRole("button", { name: "Submit" }).click();
  60 | 
  61 |     const loading = this.page.getByText(/creating a case/i);
  62 |     await loading.waitFor({ state: "visible", timeout: 60000 });
  63 |     await loading.waitFor({ state: "detached", timeout: 120000 });
  64 | 
  65 |     const confirmation = this.page.getByText(/Your Case Number is/i);
  66 |     await confirmation.waitFor({ state: "visible", timeout: 120000 });
  67 | 
  68 |     const text = await confirmation.innerText();
  69 |     const caseNumber = text.match(/\d+/)?.[0];
  70 |     console.log("New Case Number:", caseNumber);
  71 |   }
  72 | }
  73 | 
  74 | 
```