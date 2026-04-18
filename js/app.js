const NAV_GROUPS = [
  {
    id: "getting-started",
    title: "Getting Started",
    pages: [
      { slug: "anti-virus", title: "Anti-Virus" },
      { slug: "getting-started/win-rar", title: "Installing WinRAR" },
      { slug: "getting-started/redistributables", title: "Installing Visual C++ Redistributables" },
      { slug: "getting-started/secure-boot", title: "Disabling Secure Boot" },
      { slug: "getting-started/tpm", title: "Disabling TPM" },
      { slug: "getting-started/windows-security", title: "Disabling Windows Security Features" },
      { slug: "getting-started/virtualization-errors", title: "Virtualization Errors" },
      { slug: "getting-started/required-overlays", title: "Setting Up Required Overlays" }
    ]
  },
  {
    id: "rainbow",
    title: "Rainbow Six Siege",
    pages: [
      { slug: "rainbow-six/aptitude", title: "Aptitude" },
      { slug: "rainbow-six/crusader", title: "Crusader" },
      { slug: "rainbow-six/exodus", title: "Exodus" },
      { slug: "rainbow-six/vega", title: "Vega" },
      { slug: "rainbow-six/void", title: "Void" }
    ]
  },
  {
    id: "rust",
    title: "Rust",
    pages: [
      { slug: "rust/exodus", title: "Exodus" },
      { slug: "rust/ancient", title: "Ancient" }
    ]
  },
  {
    id: "arc-raiders",
    title: "Arc Raiders",
    pages: [
      { slug: "arc-raiders/ancient", title: "Ancient" },
      { slug: "arc-raiders/fecurity", title: "Fecurity" }
    ]
  },
  {
    id: "fortnite",
    title: "Fortnite",
    pages: [
      { slug: "fortnite/ancient", title: "Ancient" },
      { slug: "fortnite/exodus", title: "Exodus" }
    ]
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    pages: [{ slug: "apex-legends/arcane", title: "Arcane" }]
  },
  {
    id: "counter-strike",
    title: "Counter Strike",
    pages: [{ slug: "counter-strike/predator", title: "Predator" }]
  },
  {
    id: "spoofer",
    title: "Spoofer",
    pages: [
      { slug: "spoofer/temp-spoofer", title: "Temp Spoofer" },
      { slug: "spoofer/verse-perm-spoofer", title: "Verse Perm Spoofer" }
    ]
  }
];

const PAGES = {
  "anti-virus": {
    slug: "anti-virus",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Anti-Virus",
    intro: "Disable Microsoft Defender using DControl to avoid setup issues and ensure proper functionality.",
    sections: [
      {
        id: "overview",
        title: "DControl (Defender Control)",
        paragraphs: ["Defender Control is a portable tool that completely disables Microsoft Defender in Windows. Our software performs tasks that antivirus programs flag as suspicious, so Defender must be disabled to avoid conflicts."]
      },
      {
        id: "quick-setup",
        title: "Quick Setup",
        paragraphs: ["Follow these steps to disable Microsoft Defender using DControl."],
        steps: [
          {
            title: "Download",
            content: [
              "Dfender Control: https://sordum.org/files/downloads.php?st-defender-control",
              "Password: sordum"
            ]
          },
          {
            title: "Extract and Run",
            content: [
              "Unzip and run dControl.exe"
            ]
          },
          {
            title: "Add to Exclusions:",
            content: [
              "Click menu → 'Add it to the exclusion list'",
              "This prevents false alerts and creates desktop shortcut",
              "Path: C:\\Program Files (x86)\\DefenderControl\\dcontrol.exe"
            ]
          },
          {
            title: "Disable Defender:",
            content: [
              "Click 'Disable Windows Defender'",
              "Button should turn RED when finished",
              "If prompted, disable Anti-Tamper Protection"
            ]
          }
        ]
      },
      {
        id: "additional-steps",
        title: "Additional-Steps",
        paragraphs: [],
        steps: [
          {
            title: "Also disable these Windows features:",
            content: [
              "Windows SmartScreen",
              "Windows Firewall (if issues persist)",
              "UAC (User Account Control) - Optional but recommended"
            ]
          },
          {
            title: "Remove third-party antivirus:",
            content: [
              "Uninstall Kaspersky, Avast, Norton, McAfee, etc.",
              "These will also block the loader"
            ]
          }
        ]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        paragraphs: [],
        steps: [
          {
            title: "Defender Keeps Re-enabling:",
            content: [
              "Disable anti-tamper protection when prompted",
              "Run DControl as Administrator",
              "Restart PC after disabling"
            ]
          },
          {
            title: "Can't Download DControl:",
            content: [
              "Windows may block the download",
              "Click 'Keep' or 'Download anyway' in browser",
              "Temporarily disable SmartScreen"
            ]
          },
          {
            title: "Still Getting Blocked:",
            content: [
              "Ensure DControl button is RED",
              "Check no other antivirus is running",
              "Add loader folder to exclusions manually"
            ]
          }
        ]
      }
    ],
    prev: null,
    next: "getting-started/win-rar"
  },

  "getting-started/win-rar": {
    slug: "getting-started/win-rar",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Installing WinRAR",
    intro: "WinRAR is needed to extract our loader files. Most downloads come in .rar format.",
    sections: [
      {
        id: "overview",
        title: "What is WinRAR?",
        paragraphs: ["Archive manager for compressing and extracting RAR, ZIP, and other archive formats."]
      },
      {
        id: "video tutorial",
        title: "Video Tutorial",
        paragraphs: ["Guide: https://www.youtube.com/watch?v=9bA8Yh0EtbQ"]
      },
      {
        id: "steps",
        title: "Quick Install",
        steps: [
          { title: "Download", content: ["WinRAR Official: https://www.win-rar.com/download.html", "Choose your Windows version (32-bit or 64-bit)"] },
          { title: "Install", content: ["Run downloaded .exe as Administrator", "Select language", "Use default installation directory", "Click 'Install'"] },
          { title: "Done", content: ["WinRAR is ready to use"] }
        ]
      }
    ],
    prev: "anti-virus",
    next: "getting-started/redistributables"
  },

  "getting-started/redistributables": {
    slug: "getting-started/redistributables",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Installing Visual C++ Redistributables",
    intro: "Visual C++ Redistributables are required for our software. Install before using the loader.",
    sections: [
      {
        id: "what-are",
        title: "What are VCRedist?",
        paragraphs: [
          "Runtime components that Windows applications need to run. Missing these causes errors like:"
        ],
        list: [
          "0xc000007b",
          "MSVCP140.dll is missing",
          "VCRUNTIME140.dll not found",
          "The program can't start because VCRUNTIME140_1.dll is missing"
        ]
      },
      {
        id: "quick-install",
        title: "Quick Install",
        steps: [
          { title: "Download", content: ["Visual C++ AIO: https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/"] },
          { title: "Run", content: ["Run VisualCppRedist_AIO_x86_x64.exe as Administrator"] },
          { title: "Install", content: ["Click 'Install' "] },
          { title: "Restart", content: ["Restart your PC.", "AIO installer includes all versions (2005-2022) for both x86 and x64."] }
        ]
      },
      {
        id: "manual",
        title: "Manual Install (Official Microsoft)",
        paragraphs: ["Latest versions: x64 (64 bit), x86 (32 bit)", "Install BOTH versions and restart pc."]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        paragraphs: ["Installation Fails"],
        steps: [
          { title: "Check Installed Versions:", content: ["Open Control Panel → Programs and Features", "Look for 'Microsoft Visual C++ 2015-2022 Redistributable'", "Should see both (x64) and (x86) versions", "Download only from official sources to avoid malware."] }
        ]
      }
    ],
    prev: "getting-started/win-rar",
    next: "getting-started/secure-boot"
  },

  "getting-started/secure-boot": {
    slug: "getting-started/secure-boot",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Disabling Secure Boot",
    intro: "Only disable Secure Boot if specifically required by our software or instructed by support.",
    sections: [
      {
        id: "what-is-secure-boot",
        title: "What is Secure Boot?",
        paragraphs: [
          "Secure Boot ensures your PC boots using only trusted software. Some applications require it to be disabled for low-level system access."
        ]
      },
      {
        id: "video-tutorial",
        title: "Video Tutorial",
        paragraphs: [
          "Guide: https://www.youtube.com/watch?v=z0YJi8RJHK4"
        ]
      },
      {
        id: "steps",
        title: "Quick Steps:",
        steps: [
          {
            title: "Enter BIOS",
            content: [
              "Restart PC, press BIOS key during startup",
              "Common keys: F2, Del, F12, Esc",
              "Keep pressing until BIOS appears"
            ]
          },
          {
            title: "Find Secure Boot",
            content: [
              "Look under 'Security' or 'Boot' menu"
            ]
          },
          {
            title: "Disable",
            content: [
              "Set 'Secure Boot' to 'Disabled'"
            ]
          },
          {
            title: "Save",
            content: [
              "Press F10, confirm, and restart"
            ]
          }
        ]
      },
      {
        id: "keys",
        title: "Manufacturer-Specific Keys",
        paragraphs: [
          "Brand | BIOS Key | Location",
          "HP | F10 | Security → Secure Boot Configuration",
          "Dell | F2 | Security → Secure Boot",
          "Lenovo | F1 or Fn+F1 | Security → Secure Boot",
          "ASUS | Del or F2 | Boot → Secure Boot Control",
          "MSI | Del | Security/Boot → Secure Boot",
          "Acer | F2 or Del | Boot → Secure Boot"
        ]
      },
      {
        id: "verify",
        title: "Verify Status",
        paragraphs: [
          "In Windows:"
        ],
        steps: [
          {
            title: "Check in Windows",
            content: [
              "Press Windows + R",
              "Type msinfo32",
              "Check 'Secure Boot State' → Should show 'Off'"
            ]
          },
          {
            title: "Check in PowerShell",
            content: [
              "Confirm-SecureBootUEFI",
              "Should return 'False' if disabled"
            ]
          }
        ]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        paragraphs: [
          "Common issues:"
        ],
        steps: [
          {
            title: "Can't Find Option",
            content: [
              "Look in Security, Boot, Authentication, or Advanced tabs",
              "Some brands require an admin BIOS password before Secure Boot settings appear",
              "Legacy/CSM mode may need to be disabled first"
            ]
          },
          {
            title: "Can't Disable",
            content: [
              "Reset BIOS to defaults first",
              "Update BIOS to latest version",
              "Check Windows settings aren't blocking"
            ]
          }
        ]
      },
      {
        id: "re-enable-secure-boot",
        title: "Re-enable Secure Boot",
        steps: [
          {
            title: "Re-enable Later",
            content: [
              "Enter BIOS again",
              "Set 'Secure Boot' to 'Enabled'",
              "Save and exit",
              "Windows may require verification"
            ]
          }
        ],
        list: [
          "Record current BIOS settings before changes",
          "Keep laptop plugged in during BIOS changes",
          "Don't modify other BIOS settings",
          "Some Windows features need Secure Boot enabled"
        ]
      }
    ],
    prev: "getting-started/redistributables",
    next: "getting-started/tpm"
  },

  "getting-started/tpm": {
    slug: "getting-started/tpm",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Disabling TPM",
    intro: "TPM (Trusted Platform Module) is a security chip. Only disable if specifically instructed by support.",
    sections: [
      {
        id: "method-1",
        title: "Method 1: BIOS (Recommended)",
        steps: [
          { title: "Disable in BIOS", content: ["Restart PC and enter BIOS (F2, Del, F12)", "Look under 'Security', 'Advanced', or 'Trusted Computing'", "Find 'TPM Device' or 'Security Device'", "Set to 'Disabled'", "Save (F10) and restart"] }
        ]
      },
      {
        id: "method-2",
        title: "Method 2: Disable Services",
        paragraphs: ["Run CMD as Administrator:"],
        steps: [
          {
            title: "Disable TPM Services",
            content: ["Restart PC"]
          }
        ],
        codeBlocks: [
          {
            code: `sc stop tpm
sc config tpm start= disabled
sc stop TPMCoreProvisioningService
sc config TPMCoreProvisioningService start= disabled
sc stop TBS
sc config TBS start= disabled`
          }
        ]
      },
      {
        id: "method-3",
        title: "Method 3: Registry",
        steps: [
          {
            title: "Registry Method",
            content: [
              "Press Windows + R → type regedit",
              "Navigate to:",
              "Change 'Start' value to 4",
              "Repeat for: Services\\TBS",
              "Repeat for: Services\\TPMConnect",
              "Restart PC"
            ]
          }
        ],
        codeBlocks: [
          {
            code: `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\TPM`
          }
        ]
      },
      {
        id: "method-4",
        title: "Method 4: Remove TPM.sys (Advanced)",
        paragraphs: [
          "This modifies system files. Create backup first.",
          "Run CMD as Administrator:"
        ],
        steps: [
          {
            title: "Backup and Rename TPM Driver",
            content: [
              "Restart PC"
            ]
          }
        ],
        codeBlocks: [
          {
            code: `copy C:\\Windows\\System32\\drivers\\tpm.sys C:\\tpm_backup.sys
takeown /f C:\\Windows\\System32\\drivers\\tpm.sys
icacls C:\\Windows\\System32\\drivers\\tpm.sys /grant administrators:F
ren C:\\Windows\\System32\\drivers\\tpm.sys tpm.sys.old`
          }
        ]
      },
      {
        id: "verify-tpm",
        title: "Verify TPM Status",
        paragraphs: [
          "Check status:"
        ],
        steps: [
          {
            title: "Verify TPM",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `tpm.msc`
          },
          {
            code: `Get-Tpm`
          }
        ]
      },
      {
        id: "restore-tpm",
        title: "Restore TPM",
        paragraphs: [
          "If renamed:"
        ],
        steps: [
          {
            title: "Restore Renamed Driver",
            content: []
          },
          {
            title: "Restore Backup",
            content: []
          },
          {
            title: "Re-enable Services",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `ren C:\\Windows\\System32\\drivers\\tpm.sys.old tpm.sys`
          },
          {
            code: `copy C:\\tpm_backup.sys C:\\Windows\\System32\\drivers\\tpm.sys`
          },
          {
            code: `sc config tpm start= auto
sc config TPMConnect start= auto
sc config TBS start= auto`
          }
        ],
        list: [
          "Some Windows features require TPM",
          "Create system restore point first",
          "Keep backup of tpm.sys",
          "Windows Updates may re-enable TPM"
        ]
      },
      {
        id: "tpm-troubleshooting",
        title: "Troubleshooting",
        paragraphs: [
          "Services Keep Re-enabling"
        ],
        steps: [
          {
            title: "Services Keep Re-enabling",
            content: [
              "Use both registry and service methods",
              "Check Windows Updates",
              "Use Group Policy method"
            ]
          },
          {
            title: "Boot Issues",
            content: [
              "Boot in safe mode",
              "Restore from backup",
              "Use system restore point"
            ]
          }
        ],
        list: [
          "For support, contact our team."
        ]
      }
    ],
    prev: "getting-started/secure-boot",
    next: "getting-started/windows-security"
  },

  "getting-started/windows-security": {
    slug: "getting-started/windows-security",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Disabling Windows Security Features",
    intro: "Only disable these if instructed. These protections exist to secure your system and should not be turned off unnecessarily.",
    sections: [
      {
        id: "exploit-protection",
        title: "Disable Exploit Protection (Per Program)",
        steps: [
          {
            title: "Add Program Exception",
            content: [
              "Press Windows + I → Privacy & Security → Windows Security",
              "Open \"App & browser control\"",
              "Click \"Exploit protection settings\"",
              "Go to \"Program settings\"",
              "Click \"Add program to customize\"",
              "Select \"Add by program name\"",
              "Enter your program name (example: loader.exe)",
              "Disable all protections for that program"
            ]
          }
        ]
      },
      {
        id: "system-wide-disable",
        title: "System-Wide Disable (PowerShell)",
        paragraphs: [
          "Run PowerShell as Administrator:"
        ],
        steps: [
          {
            title: "Disable Protections",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `Set-ProcessMitigation -System -Disable CFG,DEP,ASLR,SEHOP,StrictHandle`
          }
        ],
        list: [
          "This disables protections globally",
          "Restart required after running"
        ]
      },
      {
        id: "disable-cfg",
        title: "Disable Control Flow Guard (CFG)",
        steps: [
          {
            title: "Registry Method",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v EnableCfg /t REG_DWORD /d 0 /f
Restart PC`
          }
        ]
      },
      {
        id: "disable-dep",
        title: "Disable DEP (Data Execution Prevention)",
        steps: [
          {
            title: "Disable DEP",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `bcdedit.exe /set {current} nx AlwaysOff
Restart PC`
          }
        ]
      },
      {
        id: "quick-disable-script",
        title: "Quick Disable Script",
        paragraphs: [
          "Run PowerShell as Administrator:"
        ],
        steps: [
          {
            title: "Full Script",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `# Backup current settings
Get-ProcessMitigation -System > "C:\\security_backup.xml"
# Disable protections
Set-ProcessMitigation -System -Disable CFG,DEP,ASLR,SEHOP,StrictHandle
# Registry changes
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v EnableCfg /t REG_DWORD /d 0 /f
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v MoveImages /t REG_DWORD /d 0 /f
# Disable DEP
bcdedit.exe /set {current} nx AlwaysOff`
          }
        ],
        list: [
          "Creates backup before changes",
          "Applies all major mitigations at once"
        ]
      },
      {
        id: "verify-changes",
        title: "Verify Changes",
        steps: [
          {
            title: "Check CFG",
            content: []
          },
          {
            title: "Check DEP",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `Get-ProcessMitigation -System | Select CFG`
          },
          {
            code: `bcdedit.exe /enum {current} | findstr nx`
          }
        ]
      },
      {
        id: "restore-security-features",
        title: "Restore Security Features",
        steps: [
          {
            title: "Restore From Backup",
            content: []
          },
          {
            title: "Reset to Default",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `Set-ProcessMitigation -PolicyFilePath "C:\\security_backup.xml"`
          },
          {
            code: `Set-ProcessMitigation -System -Reset`
          }
        ],
        list: [
          "Create system restore point before changes",
          "Restart PC after restoring",
          "Windows Updates may re-enable protections",
          "Only disable if absolutely necessary"
        ]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        steps: [
          {
            title: "Changes Not Applying",
            content: [
              "Ensure PowerShell is run as Administrator",
              "Restart PC after applying changes",
              "Check Windows Updates"
            ]
          },
          {
            title: "System Instability",
            content: [
              "Restore using backup file",
              "Reset mitigations",
              "Use system restore point"
            ]
          }
        ],
        list: [
          "For support, contact our team."
        ]
      }
    ],
    prev: "getting-started/tpm",
    next: "getting-started/virtualization-errors"
  },

  "getting-started/virtualization-errors": {
    slug: "getting-started/virtualization-errors",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Virtualization Errors",
    intro: "Common virtualization errors and their solutions.",
    sections: [
      {
        id: "video-tutorial",
        title: "Video Tutorial",
        paragraphs: [
          "Guide: https://www.youtube.com/watch?v=Tj6mfsRQyCI"
        ]
      },
      {
        id: "solutions",
        title: "Solutions",
        steps: [
          {
            title: "Disable Windows Virtualization Features",
            content: [
              "Control Panel → Programs → Turn Windows features on or off",
              "Uncheck Virtual Machine Platform, Hyper-V",
              "Restart PC"
            ]
          },
          {
            title: "Disable Hypervisor",
            content: []
          },
          {
            title: "Delete Hyper-V Files (Advanced)",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `bcdedit /set hypervisorlaunchtype off`
          },
          {
            code: `# This deletes system files. Create backup first!
takeown /F "C:\\Windows\\System32\\hvix64.exe"
icacls "C:\\Windows\\System32\\hvix64.exe" /grant *S-1-5-32-544:F
takeown /F "C:\\Windows\\System32\\hvax64.exe"
icacls "C:\\Windows\\System32\\hvax64.exe" /grant *S-1-5-32-544:F
del "C:\\Windows\\System32\\hvix64.exe"
del "C:\\Windows\\System32\\hvax64.exe"`
          }
        ]
      },
      {
        id: "bios-virtualization",
        title: "Error: Enable/Disable Intel VT-X/AMD-V in BIOS",
        paragraphs: [
          "Enable/Disable Virtualization"
        ],
        steps: [
          {
            title: "Enter BIOS",
            content: [
              "Restart PC, press BIOS key during startup"
            ]
          },
          {
            title: "Enable/Disable Virtualization",
            content: [
              "Look for Intel Virtualization Technology",
              "Look for Intel VT-X",
              "Look for AMD-V",
              "Look for SVM Mode",
              "Look for Virtualization Technology"
            ]
          },
          {
            title: "Set to Enabled/Disabled",
            content: [
              "Change the setting depending on what support instructed"
            ]
          },
          {
            title: "Save",
            content: []
          }
        ],
        list: [
          "Press F10, confirm, restart",
          "Dell | F2 or F12",
          "HP | F10",
          "Lenovo | F1 or F2",
          "ASUS | Del or F2",
          "Acer | F2 or Del",
          "MSI | Del"
        ]
      },
      {
        id: "verify-virtualization",
        title: "Verify Virtualization",
        paragraphs: [
          "Task Manager:"
        ],
        steps: [
          {
            title: "Check in Task Manager",
            content: [
              "Press Ctrl+Shift+Esc",
              "Open Performance tab",
              "Check \"Virtualization\" at bottom"
            ]
          },
          {
            title: "System Info",
            content: [
              "Press Win+R → type msinfo32",
              "Check \"Virtualization Enabled In Firmware\""
            ]
          }
        ]
      },
      {
        id: "pin-not-set",
        title: "Error: PIN Not Set + Disable Hyper-V",
        paragraphs: [
          "ERROR MESSAGE",
          "Please make sure PIN is not set and manually disable Hyper-V"
        ],
        steps: [
          {
            title: "Disable PIN/Password",
            content: [
              "Remove Windows Hello PIN"
            ]
          },
          {
            title: "Disable Virtualization in BIOS",
            content: [
              "Enter BIOS, disable VT-X/AMD-V"
            ]
          },
          {
            title: "Delete Hyper-V Files",
            content: []
          },
          {
            title: "Re-enable Virtualization",
            content: [
              "Enter BIOS, enable VT-X/AMD-V again"
            ]
          },
          {
            title: "Restart PC",
            content: [
              "Restart after making all changes"
            ]
          }
        ],
        codeBlocks: [
          {
            code: `del "C:\\Windows\\System32\\hvix64.exe"
del "C:\\Windows\\System32\\hvax64.exe"`
          }
        ]
      },
      {
        id: "enable-disable-hyperv",
        title: "Enable/Disable Hyper-V",
        paragraphs: [
          "Disable:"
        ],
        steps: [
          {
            title: "Disable Hyper-V",
            content: [
              "Press Win+R → type optionalfeatures",
              "Uncheck \"Hyper-V\"",
              "Click OK, restart"
            ]
          },
          {
            title: "Enable Hyper-V",
            content: [
              "Press Win+R → type optionalfeatures",
              "Check \"Hyper-V\" (all components)",
              "Click OK, restart"
            ]
          }
        ]
      },
      {
        id: "common-issues",
        title: "Common Issues",
        paragraphs: [
          "Virtualization Conflicts"
        ],
        steps: [
          {
            title: "Virtualization Conflicts",
            content: [
              "Disable antivirus temporarily",
              "Check for conflicting virtualization software"
            ]
          },
          {
            title: "Windows Updates",
            content: [
              "Updates may re-enable Hyper-V",
              "Repeat disable steps if needed"
            ]
          },
          {
            title: "BIOS Updates",
            content: [
              "BIOS updates may reset virtualization settings",
              "Re-check after BIOS update"
            ]
          }
        ],
        list: [
          "For support, contact our team or check your manufacturer's documentation."
        ]
      }
    ],
    prev: "getting-started/windows-security",
    next: "getting-started/required-overlays"
  },

  "getting-started/required-overlays": {
    slug: "getting-started/required-overlays",
    groupId: "getting-started",
    groupTitle: "Getting Started",
    title: "Setting Up Required Overlays",
    intro: "Required overlay setup for supported products.",
    sections: [
      {
        id: "steelseries-gg",
        title: "SteelSeries GG Setup (Supports Fullscreen)",
        paragraphs: [
          "Video Tutorial: https://streamable.com/rvnl8t"
        ],
        steps: [
          {
            title: "Download",
            content: [
              "SteelSeries GG"
            ]
          },
          {
            title: "Enable Sonar",
            content: [
              "Open SteelSeries GG → GENERAL → General",
              "Enable Sonar"
            ]
          },
          {
            title: "Set Shortcut",
            content: [
              "Go to SONAR → Shortcuts",
              "Set \"Master - Volume Up\" to F7",
              "Press F7 before each injection"
            ]
          },
          {
            title: "Disable Other Notifications",
            content: [
              "Turn OFF all notifications from \"Moments\" and \"Engine\"",
              "Keep only Sonar notifications enabled",
              "Ensure SteelSeries Moments is disabled"
            ]
          }
        ],
        list: [
          "RECOMMENDED FOR ALL USERS",
          "SteelSeries GG supports fullscreen mode and works with both NVIDIA and AMD cards."
        ]
      },
      {
        id: "geforce-experience",
        title: "GeForce Experience Setup (NVIDIA Only)",
        steps: [
          {
            title: "Download",
            content: [
              "NVIDIA GeForce Experience: https://www.nvidia.com/en-eu/software/nvidia-app/"
            ]
          },
          {
            title: "Enable Overlay",
            content: [
              "Open GeForce Experience → Settings → General",
              "Enable IN-GAME OVERLAY"
            ]
          }
        ],
        list: [
          "LIMITATIONS",
          "GeForce Experience does NOT support fullscreen mode. Use windowed/borderless or switch to SteelSeries GG."
        ]
      },
      {
        id: "quick-setup-guide",
        title: "Quick Setup Guide",
        steps: [
          {
            title: "NVIDIA Users",
            content: [
              "Best Option: SteelSeries GG (fullscreen support)",
              "Alternative: GeForce Experience (windowed/borderless only)"
            ]
          },
          {
            title: "AMD Users",
            content: [
              "Only Option: SteelSeries GG"
            ]
          }
        ]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        steps: [
          {
            title: "Overlay Not Appearing",
            content: [
              "Press F7 before injection (SteelSeries)",
              "Verify overlay is enabled in settings",
              "Restart overlay software"
            ]
          },
          {
            title: "Overlay Off-Center",
            content: [
              "Unlock taskbar and drag to bottom",
              "Press F7 once to reposition"
            ]
          },
          {
            title: "Sonar Not Working",
            content: [
              "Check Sonar is enabled in General settings",
              "Verify F7 shortcut is set correctly",
              "Disable conflicting overlay software"
            ]
          },
          {
            title: "Fullscreen Issues",
            content: [
              "Use SteelSeries GG instead of GeForce Experience",
              "Or switch game to windowed/borderless mode"
            ]
          }
        ]
      },
      {
        id: "important-notes",
        title: "Important Notes",
        list: [
          "Always press F7 (or your set shortcut) before injection",
          "Keep focus on the monitor where you need the overlay",
          "Disable all other overlay software (Discord, Steam, etc.)",
          "SteelSeries Moments must be disabled"
        ]
      }
    ],
    prev: "getting-started/virtualization-errors",
    next: "rainbow-six/aptitude"
  },

  "rainbow-six/aptitude": {
    slug: "rainbow-six/aptitude",
    groupId: "rainbow",
    groupTitle: "Rainbow Six Siege",
    title: "Aptitude",
    intro: "Aptitude setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Website: https://aptitude.pub/",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Login to Website",
            content: [
              "Go to the Aptitude login page",
              "Login using the username and password provided",
              "Accounts are delivered in the format: Username,Password,Product,Subscription"
            ]
          },
          {
            title: "Download Loader",
            content: [
              "Navigate to the Customer Area",
              "Locate the Loader Download section",
              "Download the loader"
            ]
          },
          {
            title: "Prepare Loader",
            content: [
              "Move the loader to Desktop or C:\\ drive",
              "Unzip/Extract the file",
              "Ensure the loader is the .exe file"
            ]
          },
          {
            title: "Run Loader",
            content: [
              "Launch the loader as Administrator",
              "Login using your provided credentials"
            ]
          },
          {
            title: "Inject",
            content: [
              "Select R6",
              "Press Inject and wait for the process to complete"
            ]
          },
          {
            title: "Start Game",
            content: [
              "Launch Rainbow Six Siege after injection"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Press INSERT in-game to open the menu"
            ]
          }
        ]
      },
      {
        id: "hwid-issues",
        title: "HWID Issues",
        paragraphs: [
          "HWID is invalid / mismatching"
        ],
        list: [
          "Go to the HWID reset page to reset your HWID",
          "Cooldown is 3 days",
          "Link: https://aptitude.pub/membersshop/view/1-hwid-reset/"
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on Discord with your error and we will help you: https://https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "getting-started/required-overlays",
    next: "rainbow-six/crusader"
  },

  "rainbow-six/crusader": {
    slug: "rainbow-six/crusader",
    groupId: "rainbow",
    groupTitle: "Rainbow Six Siege",
    title: "Crusader",
    intro: "Crusader setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://uniqueloader.com/r6s",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Activation Key",
            content: [
              "After completing your payment, you will receive a key to activate access to the software."
            ]
          },
          {
            title: "Download the Loader",
            content: [
              "Download the loader using this link",
              "Password for the archive: 123"
            ]
          },
          {
            title: "Extract the Files",
            content: [
              "Extract the archive contents.",
              "Place them in a separate folder with an English name.",
              "It is recommended to place this folder in the root of the C drive (e.g. C:\\Crusader)."
            ]
          },
          {
            title: "Run the Loader",
            content: [
              "Right-click the cheat loader and select Run as administrator."
            ]
          },
          {
            title: "Enter Your Key",
            content: [
              "Insert your key into the Serial Key field.",
              "Click Sign In."
            ]
          },
          {
            title: "Load the Cheat",
            content: [
              "After a short loading period, you will see the R6S icon.",
              "Click Start Injection Process."
            ]
          },
          {
            title: "Launch the Game",
            content: [
              "When prompted with \"Please Open Rainbow Six Siege\", launch the game."
            ]
          },
          {
            title: "Open the Cheat Menu",
            content: [
              "Once the game starts, press Insert in the main menu.",
              "After pressing Insert, wait approximately 30–60 seconds for the menu to appear.",
              "The cheat menu will appear.",
              "To toggle the menu, press Insert again."
            ]
          }
        ]
      },
      {
        id: "driver-initialization-error-1",
        title: "Driver Initialization Error 1",
        paragraphs: [
          "This issue is usually caused by one or more of the following:"
        ],
        list: [
          "Exploit Protection is turned on",
          "Windows Defender or Kernel Isolation is enabled",
          "Anti-cheat software like FACEIT or Valorant is installed",
          "Control Flow Guard (CFG) is enabled",
          "Other antivirus programs are running"
        ],
        images: [
          {
            src: "./assets/crusader/driver-initialization-error-1.png",
            alt: "Driver Initialization Error 1"
          }
        ]
      },
      {
        id: "cannot-connect-to-server",
        title: "Cannot Connect To Server",
        paragraphs: [
          "This error can be fixed by using a VPN.",
          "We recommend using Cloudflare WARP.",
          "The VPN can be disabled before opening the game."
        ]
      },
      {
        id: "please-open-file-properly",
        title: "Please open File Properly",
        paragraphs: [
          "Re-download the loader and place it on your desktop in a new folder.",
          "Make sure the loader is not zipped."
        ],
        images: [
          {
            src: "./assets/crusader/please-open-file-properly.png",
            alt: "Please open File Properly"
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on Discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "rainbow-six/aptitude",
    next: "rainbow-six/exodus"
  },

    "rainbow-six/exodus": {
    slug: "rainbow-six/exodus",
    groupId: "rainbow",
    groupTitle: "Rainbow Six Siege",
    title: "Exodus",
    intro: "Exodus setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/loader_exodus",
          "Medal.TV: https://medal.tv/",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Download Loader & Medal.TV",
            content: [
              "Download the loader & Medal.TV from the provided links"
            ]
          },
          {
            title: "Extract Files",
            content: [
              "Extract the archive to a new folder",
              "Place it on Desktop or C:\\ drive"
            ]
          },
          {
            title: "Run Medal.TV & Loader",
            content: [
              "Open Medal.TV as Administrator",
              "Right-click the loader → Run as Administrator"
            ]
          },
          {
            title: "Login / Inject",
            content: [
              "Enter your key in the loader by right-clicking",
              "Inject and wait for completion",
              "You may be prompted to restart your PC, If so load the loader again after restarting"
            ]
          },
          {
            title: "Launch Game",
            content: [
              "After succesful injection start Rainbow Six Siege"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Once in main menu press INSERT in-game"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on Discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "rainbow-six/crusader",
    next: "rainbow-six/vega"
  },

  "rainbow-six/vega": {
    slug: "rainbow-six/vega",
    groupId: "rainbow",
    groupTitle: "Rainbow Six Siege",
    title: "Vega",
    intro: "Vega setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://mega.nz/folder/OAkhFCbJ#X0bbzcy5PFIiOJOWnuQyog",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Register",
            content: [
              "If you are using the cheat for the first time, register first.",
              "The Register button is right under the Login button."
            ]
          },
          {
            title: "Enter Details",
            content: [
              "Choose your username and password.",
              "After that, enter your Cheat key."
            ]
          },
          {
            title: "Login",
            content: [
              "Once registration succeeds, log in.",
              "After logging in, you should see your active cheat subscriptions."
            ]
          },
          {
            title: "First Load",
            content: [
              "Press the Load button.",
              "A pop-up will appear asking you to reboot your machine."
            ]
          },
          {
            title: "Reboot",
            content: [
              "Restart your PC when prompted."
            ]
          },
          {
            title: "Second Login",
            content: [
              "After rebooting, open the loader again.",
              "Log in again."
            ]
          },
          {
            title: "Second Load",
            content: [
              "Press Load for the second time.",
              "If everything worked properly, the loader should close itself.",
              "It is not normal if the loader stays open."
            ]
          },
          {
            title: "Start the Game",
            content: [
              "Launch the game.",
              "Make sure the game is running in Borderless window mode."
            ]
          },
          {
            title: "Open the Menu",
            content: [
              "Once you are inside the game window, press the INSERT key.",
              "The menu should appear.",
              "Use INSERT again anytime to open or close the menu."
            ]
          }
        ]
      },
      {
        id: "esp-lagging",
        title: "ESP Lagging",
        list: [
          "Enable VSync 1"
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on Discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "rainbow-six/exodus",
    next: "rainbow-six/void"
  },

  "rainbow-six/void": {
    slug: "rainbow-six/void",
    groupId: "rainbow",
    groupTitle: "Rainbow Six Siege",
    title: "Void",
    intro: "Void setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://v0id.win/loader.zip",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "prerequisites",
        title: "Step 1: Prerequisites",
        paragraphs: [
          "To use our products, you need to follow these requirements:"
        ],
        list: [
          "Enable Discord's overlay",
          "Disable any antivirus"
        ]
      },
      {
        id: "enable-discord-overlay",
        title: "Enabling Discord's Overlay",
        paragraphs: [
          "In order to enable Discord's overlay, follow these steps:"
        ],
        steps: [
          {
            title: "Open Settings",
            content: [
              "Head to Discord's settings."
            ]
          },
          {
            title: "Open Game Overlay",
            content: [
              "Choose \"Game Overlay\" section."
            ]
          },
          {
            title: "Enable Overlays",
            content: [
              "Enable both legacy and new overlay."
            ]
          }
        ],
        images: [
          {
            src: "./assets/void/discord-overlay-settings.png",
            alt: "Discord game overlay settings"
          },
          {
            src: "./assets/void/discord-overlay-enable.png",
            alt: "Enable Discord overlay and legacy overlay"
          }
        ]
      },
      {
        id: "disable-antivirus",
        title: "Disabling antivirus ⚠️",
        paragraphs: [
          "To disable Windows Defender, follow these steps:"
        ],
        list: [
          "Open Windows Security by searching for it in the Start menu",
          "Click on \"Virus & threat protection\"",
          "Under \"Virus & threat protection settings,\" click \"Manage settings\"",
          "Toggle off \"Real-time protection\"",
          "Confirm the action when prompted by User Account Control"
        ]
      },
      {
        id: "setup",
        title: "Step 2: Setup",
        paragraphs: [
          "After you have successfully followed Step 1, here's how to set up the VOID loader. Start by downloading the loader:",
          "You will receive your KEY via email (This may vary depending on the seller)",
          "Before proceeding, Download our loader from HERE"
        ]
      },
      {
        id: "registration",
        title: "Registration",
        paragraphs: [
          "Once you open the Loader, it will launch an authentication page in your browser. There, simply choose your username and enter your activation key in the last field to activate your subscription."
        ],
        images: [
          {
            src: "./assets/void/registration.png",
            alt: "VOID registration screen"
          }
        ]
      },
      {
        id: "recovery-key",
        title: "Recovery Key",
        paragraphs: [
          "After registration, you will see a recovery key. Copy it and keep it safe.",
          "This key is needed to recover your account if you reset your PC or switch devices.",
          "Remember not to share your RECOVERY KEY with anyone."
        ],
        images: [
          {
            src: "./assets/void/recovery-key.png",
            alt: "VOID recovery key screen"
          }
        ]
      },
      {
        id: "log-in",
        title: "Log In",
        paragraphs: [
          "Once you have saved your recovery key, simply run the loader again.",
          "You will now be automatically logged in with your active subscription."
        ],
        images: [
          {
            src: "./assets/void/logged-in.png",
            alt: "VOID logged in screen"
          }
        ]
      },
      {
        id: "inject",
        title: "Inject",
        paragraphs: [
          "After clicking Load, you will need to wait a few seconds until the message \"Everything is ready! Press F5 once in game.\" appears."
        ],
        images: [
          {
            src: "./assets/void/inject-ready.png",
            alt: "VOID ready to inject message"
          }
        ]
      },
      {
        id: "enjoy",
        title: "Enjoy",
        paragraphs: [
          "Once you are in the game menu, remember to set the Display Mode to Borderless (OTHERWISE OUR PRODUCT WILL NOT WORK).",
          "After making sure that the Discord overlay is enabled and the display mode is set to borderless, press F5.",
          "Once you reach this point, simply follow the on-screen instructions (as you can see in the image above).",
          "To open and close the menu, press INS.",
          "We recommend pressing TAB while you are in the shooting range, then opening the menu and selecting your preferred checkboxes. This way, you avoid the menu closing every time you click."
        ],
        images: [
          {
            src: "./assets/void/setup-in-game.png",
            alt: "VOID in-game setup screen"
          },
          {
            src: "./assets/void/menu-example.png",
            alt: "VOID menu example"
          }
        ]
      },
      {
        id: "common-errors",
        title: "Common Errors",
        list: [
          "DRM — Antivirus / Anticheat running — Make sure you have fully disabled all antivirus programs and closed the game.",
          "DLC/DLD — Connection error — Make sure you are connected to the internet and try again.",
          "Discord overlay not found or unable to see overlay — Discord overlay not running properly — Make sure Discord's overlay is enabled. If needed, disable and then re-enable it."
        ]
      },
      {
        id: "recovery-key-reset",
        title: "Recovery Key",
        paragraphs: [
          "If you are no longer logged in when opening the loader (e.g., after a PC reset or switching computers), follow these steps:"
        ],
        steps: [
          {
            title: "Step 1",
            content: [
              "Open the loader. It will automatically open the authentication page in your browser.",
              "On the registration page, click: \"Lost access to your account? Click here.\""
            ]
          },
          {
            title: "Step 2",
            content: [
              "You will be taken to a recovery page.",
              "Enter your Recovery Key in the field provided.",
              "Once you submit the key, you will see a confirmation message."
            ]
          },
          {
            title: "Step 3",
            content: [
              "After completing the recovery request, open a support ticket on our Discord server and let us know that you have submitted an HWID reset request.",
              "We will then verify and activate your account on the new hardware."
            ]
          }
        ],
        images: [
          {
            src: "./assets/void/recovery-step-1.png",
            alt: "VOID recovery step 1"
          },
          {
            src: "./assets/void/recovery-step-2.png",
            alt: "VOID recovery step 2"
          },
          {
            src: "./assets/void/recovery-confirmation.png",
            alt: "VOID recovery confirmation"
          }
        ]
      }
    ],
    prev: "rainbow-six/vega",
    next: "rust/exodus"
  },
  "rust/exodus": {
    slug: "rust/exodus",
    groupId: "rust",
    groupTitle: "Rust",
    title: "Exodus",
    intro: "Exodus setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/loader_exodus",
          "Medal.TV: https://medal.tv/",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Download Loader & Medal.TV",
            content: [
              "Download the loader & Medal.TV from the provided links"
            ]
          },
          {
            title: "Extract Files",
            content: [
              "Extract the archive to a new folder",
              "Place it on Desktop or C:\\ drive"
            ]
          },
          {
            title: "Run Medal.TV & Loader",
            content: [
              "Open Medal.TV as Administrator",
              "Right-click the loader → Run as Administrator"
            ]
          },
          {
            title: "Login / Inject",
            content: [
              "Enter your key in the loader by right-clicking",
              "Inject and wait for completion",
              "You may be prompted to restart your PC, If so load the loader again after restarting"
            ]
          },
          {
            title: "Launch Game",
            content: [
              "After succesful injection start Rust"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Once in main menu press INSERT in-game"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on Discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "rainbow-six/void",
    next: "rust/ancient"

  },
  "rust/ancient": {
    slug: "rust/ancient",
    groupId: "rust",
    groupTitle: "Rust",
    title: "Ancient",
    intro: "Ancient setup and support information for Rust.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/download/loader",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables",
          "Overlay: https://docs.ghostware.cc/#getting-started/required-overlays"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Launch",
            content: [
              "Launch the loader"
            ]
          },
          {
            title: "Enter Key",
            content: [
              "Enter your key"
            ]
          },
          {
            title: "Inject",
            content: [
              "Press Inject"
            ]
          },
          {
            title: "After Inject",
            content: [
              "The loader will close automatically after injection",
              "Once closed, you can launch the game"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Press the INSERT key in-game to open the menu"
            ]
          }
        ]
      },
      {
        id: "loader-not-injecting",
        title: "Loader Not Injecting (Stuck Loading)",
        steps: [
          {
            title: "Fix",
            content: [
              "Create a new folder on Desktop (e.g. C:\\Users\\YourName\\Desktop\\Loader)",
              "Move the loader into this folder",
              "Ensure no other files are inside",
              "Right-click loader → Run as administrator",
              "Launch again"
            ]
          }
        ]
      },
      {
        id: "overlay-issues",
        title: "Overlay Issues",
        steps: [
          {
            title: "GeForce Error",
            content: [
              "Disable and re-enable GeForce overlay"
            ]
          },
          {
            title: "SteelSeries Sonar Error",
            content: [
              "Press Sonar bind before launching"
            ]
          }
        ]
      },
      {
        id: "display-issues",
        title: "Display Issues",
        steps: [
          {
            title: "Menu Flickering / Black Screen",
            content: [
              "Open SteelSeries",
              "Go to Settings → MOMENTS → Capture and sound",
              "Disable \"Allow Moments to capture while gaming\""
            ]
          },
          {
            title: "No Menu / Loader Closes",
            content: [
              "Install Visual C++ Redistributable (VC Redist x64)"
            ]
          }
        ]
      },
      {
        id: "bind-issues",
        title: "Bind Issues",
        steps: [
          {
            title: "Fix",
            content: [
              "Reinject",
              "Run overlay as administrator"
            ]
          }
        ]
      },
      {
        id: "technical-errors",
        title: "Technical Errors",
        steps: [
          {
            title: "0x296",
            content: [
              "Reinject"
            ]
          },
          {
            title: "Unknown Network Error",
            content: [
              "Check internet connection",
              "Disable VPN"
            ]
          },
          {
            title: "Memory Allocation Errors",
            content: [
              "Restart PC",
              "Try another PC (internet cafe)",
              "Clean startup programs"
            ]
          },
          {
            title: "Dependency Errors",
            content: [
              "Disable all protection",
              "Remove antivirus / anti-readers",
              "Clean startup programs"
            ]
          },
          {
            title: "Anti-Cheat Conflicts",
            content: [
              "Uninstall Vanguard / Faceit"
            ]
          },
          {
            title: "AES Instruction Error",
            content: [
              "CPU does not support AES",
              "Requires hardware upgrade"
            ]
          }
        ]
      },
      {
        id: "virtualization-errors",
        title: "Virtualization Errors",
        steps: [
          {
            title: "VMX / SVM Not Supported",
            content: [
              "Disable Hyper-V and Virtual Machine Platform"
            ]
          },
          {
            title: "Disable Hypervisor",
            content: []
          },
          {
            title: "Windows 11 Advanced Fix",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `bcdedit /set hypervisorlaunchtype off`
          },
          {
            code: `# Run PowerShell as Administrator and paste the following:
takeown /F "C:\\Windows\\System32\\hvix64.exe"
icacls "C:\\Windows\\System32\\hvix64.exe" /grant *S-1-5-32-544:F
takeown /F "C:\\Windows\\System32\\hvax64.exe"
icacls "C:\\Windows\\System32\\hvax64.exe" /grant *S-1-5-32-544:F
del "C:\\Windows\\System32\\hvix64.exe"
del "C:\\Windows\\System32\\hvax64.exe"`
          }
        ]
      },
      {
        id: "hwid-issues",
        title: "HWID Issues",
        steps: [
          {
            title: "Check System",
            content: [
              "wmic diskdrive get Caption,SerialNumber",
              "wmic baseboard get SerialNumber"
            ]
          }
        ]
      },
      {
        id: "failed-to-map-memory",
        title: "Failed to Map Memory / Advanced Fix",
        steps: [
          {
            title: "Option 1 (Recommended)",
            content: [
              "Disable all startup programs in Task Manager",
              "Restart PC",
              "Try again"
            ]
          },
          {
            title: "Option 2",
            content: [
              "Download Autoruns: https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
              "Disable unnecessary startup items",
              "Restart PC",
              "Try again"
            ]
          }
        ]
      },
      {
        id: "error-0x298-0",
        title: "Error 0x298(0)",
        steps: [
          {
            title: "Fix",
            content: [
              "Use VPN"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "rust/exodus",
    next: "arc-raiders/ancient"
  },

  "arc-raiders/ancient": {
    slug: "arc-raiders/ancient",
    groupId: "arc-raiders",
    groupTitle: "Arc Raiders",
    title: "Ancient",
    intro: "Ancient setup and support information for Arc Raiders.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/download/loader",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables",
          "Overlay: https://docs.ghostware.cc/#getting-started/required-overlays"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Launch",
            content: [
              "Launch the loader"
            ]
          },
          {
            title: "Enter Key",
            content: [
              "Enter your key"
            ]
          },
          {
            title: "Inject",
            content: [
              "Press Inject"
            ]
          },
          {
            title: "After Inject",
            content: [
              "The loader will close automatically after injection",
              "Once closed, you can launch the game"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Press the INSERT key in-game to open the menu"
            ]
          }
        ]
      },
      {
        id: "loader-not-injecting",
        title: "Loader Not Injecting (Stuck Loading)",
        steps: [
          {
            title: "Fix",
            content: [
              "Create a new folder on Desktop (e.g. C:\\Users\\YourName\\Desktop\\Loader)",
              "Move the loader into this folder",
              "Ensure no other files are inside",
              "Right-click loader → Run as administrator",
              "Launch again"
            ]
          }
        ]
      },
      {
        id: "overlay-issues",
        title: "Overlay Issues",
        steps: [
          {
            title: "GeForce Error",
            content: [
              "Disable and re-enable GeForce overlay"
            ]
          },
          {
            title: "SteelSeries Sonar Error",
            content: [
              "Press Sonar bind before launching"
            ]
          }
        ]
      },
      {
        id: "display-issues",
        title: "Display Issues",
        steps: [
          {
            title: "Menu Flickering / Black Screen",
            content: [
              "Open SteelSeries",
              "Go to Settings → MOMENTS → Capture and sound",
              "Disable \"Allow Moments to capture while gaming\""
            ]
          },
          {
            title: "No Menu / Loader Closes",
            content: [
              "Install Visual C++ Redistributable (VC Redist x64)"
            ]
          }
        ]
      },
      {
        id: "bind-issues",
        title: "Bind Issues",
        steps: [
          {
            title: "Fix",
            content: [
              "Reinject",
              "Run overlay as administrator"
            ]
          }
        ]
      },
      {
        id: "technical-errors",
        title: "Technical Errors",
        steps: [
          {
            title: "0x296",
            content: [
              "Reinject"
            ]
          },
          {
            title: "Unknown Network Error",
            content: [
              "Check internet connection",
              "Disable VPN"
            ]
          },
          {
            title: "Memory Allocation Errors",
            content: [
              "Restart PC",
              "Try another PC (internet cafe)",
              "Clean startup programs"
            ]
          },
          {
            title: "Dependency Errors",
            content: [
              "Disable all protection",
              "Remove antivirus / anti-readers",
              "Clean startup programs"
            ]
          },
          {
            title: "Anti-Cheat Conflicts",
            content: [
              "Uninstall Vanguard / Faceit"
            ]
          },
          {
            title: "AES Instruction Error",
            content: [
              "CPU does not support AES",
              "Requires hardware upgrade"
            ]
          }
        ]
      },
      {
        id: "virtualization-errors",
        title: "Virtualization Errors",
        steps: [
          {
            title: "VMX / SVM Not Supported",
            content: [
              "Disable Hyper-V and Virtual Machine Platform"
            ]
          },
          {
            title: "Disable Hypervisor",
            content: []
          },
          {
            title: "Windows 11 Advanced Fix",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `bcdedit /set hypervisorlaunchtype off`
          },
          {
            code: `# Run PowerShell as Administrator and paste the following:
takeown /F "C:\\Windows\\System32\\hvix64.exe"
icacls "C:\\Windows\\System32\\hvix64.exe" /grant *S-1-5-32-544:F
takeown /F "C:\\Windows\\System32\\hvax64.exe"
icacls "C:\\Windows\\System32\\hvax64.exe" /grant *S-1-5-32-544:F
del "C:\\Windows\\System32\\hvix64.exe"
del "C:\\Windows\\System32\\hvax64.exe"`
          }
        ]
      },
      {
        id: "hwid-issues",
        title: "HWID Issues",
        steps: [
          {
            title: "Check System",
            content: [
              "wmic diskdrive get Caption,SerialNumber",
              "wmic baseboard get SerialNumber"
            ]
          }
        ]
      },
      {
        id: "failed-to-map-memory",
        title: "Failed to Map Memory / Advanced Fix",
        steps: [
          {
            title: "Option 1 (Recommended)",
            content: [
              "Disable all startup programs in Task Manager",
              "Restart PC",
              "Try again"
            ]
          },
          {
            title: "Option 2",
            content: [
              "Download Autoruns: https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
              "Disable unnecessary startup items",
              "Restart PC",
              "Try again"
            ]
          }
        ]
      },
      {
        id: "error-0x298-0",
        title: "Error 0x298(0)",
        steps: [
          {
            title: "Fix",
            content: [
              "Use VPN"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "rust/ancient",
    next: "arc-raiders/fecurity"
  },

    "arc-raiders/fecurity": {
    slug: "arc-raiders/fecurity",
    groupId: "arc-raiders",
    groupTitle: "Arc Raiders",
    title: "Fecurity",
    intro: "Fecurity setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://mega.nz/folder/nRUWiKoI#RSfQ5Bh9oSBWpRhnvLxm7g",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Download & Install the Loader",
            content: [
              "After successfully purchasing, you will receive a key to activate the cheat.",
              "Download the software loader from the provided link."
            ]
          },
          {
            title: "Run the Loader as Administrator",
            content: [
              "Right-click the loader file and select Run as administrator."
            ]
          },
          {
            title: "Enter Your Activation Key",
            content: [
              "When prompted, insert your activation key and press Enter.",
              "You will see a message displaying your remaining access time and further instructions."
            ]
          },
          {
            title: "Restart Your Computer",
            content: [
              "If the message \"After Restarting Computer, launch the game\" appears, everything was successful.",
              "Your PC will restart automatically within a few seconds."
            ]
          },
          {
            title: "Launch the Game",
            content: [
              "After restarting, open the game normally.",
              "A notification will confirm that the cheat has started successfully."
            ]
          },
          {
            title: "Using the Cheat",
            content: [
              "The cheat menu opens/closes with the Delete key."
            ]
          },
          {
            title: "After Playing",
            content: [
              "Once you have finished playing with the cheat, restart your PC to prevent interference with other applications."
            ]
          }
        ]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        steps: [
          {
            title: "Disable Windows Defender & Antivirus",
            content: [
              "The most common issue is antivirus software blocking the cheat.",
              "Completely disable Windows Defender (Real-time Protection).",
              "Uninstall any third-party antivirus software to prevent conflicts."
            ]
          },
          {
            title: "Remove Conflicting Anti-Cheat Software",
            content: [
              "Faceit AC and Riot Vanguard (Valorant Anti-Cheat) must be uninstalled.",
              "Use proper software uninstalling instead of just deleting folders or shortcuts."
            ]
          },
          {
            title: "Check BIOS Boot Mode (UEFI Required)",
            content: [
              "The cheat will not work if your Boot Mode is set to Legacy.",
              "Press Win + R and type msinfo32.",
              "Look for \"BIOS Mode\" — it should be UEFI.",
              "If Legacy mode is enabled, change it to UEFI in your BIOS settings."
            ]
          },
          {
            title: "Disable Secure Boot",
            content: [
              "Secure Boot must be turned off for the cheat to function.",
              "Press Win + R and type msinfo32.",
              "Look for \"Secure Boot Status\" — it should read Off.",
              "If Secure Boot is enabled, go to your BIOS settings and disable it."
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "If you're experiencing any issues or need assistance, create a support ticket on Discord: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "arc-raiders/ancient",
    next: "fortnite/exodus"
  },
    "fortnite/exodus": {
    slug: "fortnite/exodus",
    groupId: "fortnite",
    groupTitle: "Fortnite",
    title: "Exodus",
    intro: "Exodus setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/loader_exodus",
          "Medal.TV: https://medal.tv/",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Download Loader & Medal.TV",
            content: [
              "Download the loader & Medal.TV from the provided links"
            ]
          },
          {
            title: "Extract Files",
            content: [
              "Extract the archive to a new folder",
              "Place it on Desktop or C:\\ drive"
            ]
          },
          {
            title: "Run Medal.TV & Loader",
            content: [
              "Open Medal.TV as Administrator",
              "Right-click the loader → Run as Administrator"
            ]
          },
          {
            title: "Login / Inject",
            content: [
              "Enter your key in the loader by right-clicking",
              "Inject and wait for completion",
              "You may be prompted to restart your PC, If so load the loader again after restarting"
            ]
          },
          {
            title: "Launch Game",
            content: [
              "After succesful injection start Fortnite"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Once in main menu press INSERT in-game"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on Discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "arc-raiders/fecurity",
    next: "fortnite/ancient"
  },

  "fortnite/ancient": {
    slug: "fortnite/ancient",
    groupId: "fortnite",
    groupTitle: "Fortnite",
    title: "Ancient",
    intro: "Ancient setup and support information for Fortnite.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/download/loader",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables",
          "Overlay: https://docs.ghostware.cc/#getting-started/required-overlays"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Launch",
            content: [
              "Launch the loader"
            ]
          },
          {
            title: "Enter Key",
            content: [
              "Enter your key"
            ]
          },
          {
            title: "Inject",
            content: [
              "Press Inject"
            ]
          },
          {
            title: "After Inject",
            content: [
              "The loader will close automatically after injection",
              "Once closed, you can launch Fortnite"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Press the INSERT key in-game to open the menu"
            ]
          }
        ]
      },
      {
        id: "loader-not-injecting",
        title: "Loader Not Injecting (Stuck Loading)",
        steps: [
          {
            title: "Fix",
            content: [
              "Create a new folder on Desktop (e.g. C:\\Users\\YourName\\Desktop\\Loader)",
              "Move the loader into this folder",
              "Ensure no other files are inside",
              "Right-click loader → Run as administrator",
              "Launch again"
            ]
          }
        ]
      },
      {
        id: "overlay-issues",
        title: "Overlay Issues",
        steps: [
          {
            title: "GeForce Error",
            content: [
              "Disable and re-enable GeForce overlay"
            ]
          },
          {
            title: "SteelSeries Sonar Error",
            content: [
              "Press Sonar bind before launching"
            ]
          }
        ]
      },
      {
        id: "display-issues",
        title: "Display Issues",
        steps: [
          {
            title: "Menu Flickering / Black Screen",
            content: [
              "Open SteelSeries",
              "Go to Settings → MOMENTS → Capture and sound",
              "Disable \"Allow Moments to capture while gaming\""
            ]
          },
          {
            title: "No Menu / Loader Closes",
            content: [
              "Install Visual C++ Redistributable (VC Redist x64)"
            ]
          }
        ]
      },
      {
        id: "bind-issues",
        title: "Bind Issues",
        steps: [
          {
            title: "Fix",
            content: [
              "Reinject",
              "Run overlay as administrator"
            ]
          }
        ]
      },
      {
        id: "technical-errors",
        title: "Technical Errors",
        steps: [
          {
            title: "0x296",
            content: [
              "Reinject"
            ]
          },
          {
            title: "Unknown Network Error",
            content: [
              "Check internet connection",
              "Disable VPN"
            ]
          },
          {
            title: "Memory Allocation Errors",
            content: [
              "Restart PC",
              "Try another PC (internet cafe)",
              "Clean startup programs"
            ]
          },
          {
            title: "Dependency Errors",
            content: [
              "Disable all protection",
              "Remove antivirus / anti-readers",
              "Clean startup programs"
            ]
          },
          {
            title: "Anti-Cheat Conflicts",
            content: [
              "Uninstall Vanguard / Faceit"
            ]
          },
          {
            title: "AES Instruction Error",
            content: [
              "CPU does not support AES",
              "Requires hardware upgrade"
            ]
          }
        ]
      },
      {
        id: "virtualization-errors",
        title: "Virtualization Errors",
        steps: [
          {
            title: "VMX / SVM Not Supported",
            content: [
              "Disable Hyper-V and Virtual Machine Platform"
            ]
          },
          {
            title: "Disable Hypervisor",
            content: []
          },
          {
            title: "Windows 11 Advanced Fix",
            content: []
          }
        ],
        codeBlocks: [
          {
            code: `bcdedit /set hypervisorlaunchtype off`
          },
          {
            code: `# Run PowerShell as Administrator and paste the following:
takeown /F "C:\\Windows\\System32\\hvix64.exe"
icacls "C:\\Windows\\System32\\hvix64.exe" /grant *S-1-5-32-544:F
takeown /F "C:\\Windows\\System32\\hvax64.exe"
icacls "C:\\Windows\\System32\\hvax64.exe" /grant *S-1-5-32-544:F
del "C:\\Windows\\System32\\hvix64.exe"
del "C:\\Windows\\System32\\hvax64.exe"`
          }
        ]
      },
      {
        id: "hwid-issues",
        title: "HWID Issues",
        steps: [
          {
            title: "Check System",
            content: [
              "wmic diskdrive get Caption,SerialNumber",
              "wmic baseboard get SerialNumber"
            ]
          }
        ]
      },
      {
        id: "failed-to-map-memory",
        title: "Failed to Map Memory / Advanced Fix",
        steps: [
          {
            title: "Option 1 (Recommended)",
            content: [
              "Disable all startup programs in Task Manager",
              "Restart PC",
              "Try again"
            ]
          },
          {
            title: "Option 2",
            content: [
              "Download Autoruns: https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
              "Disable unnecessary startup items",
              "Restart PC",
              "Try again"
            ]
          }
        ]
      },
      {
        id: "error-0x298-0",
        title: "Error 0x298(0)",
        steps: [
          {
            title: "Fix",
            content: [
              "Use VPN"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "Contact us on discord with your error and we will help you: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "arc-raiders/fecurity",
    next: "apex-legends/arcane"
  },

  "apex-legends/arcane": {
    slug: "apex-legends/arcane",
    groupId: "apex-legends",
    groupTitle: "Apex Legends",
    title: "Arcane",
    intro: "Arcane setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://undetect.net/loader_arcane",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables",
          "Overlay: https://docs.ghostware.cc/#getting-started/required-overlays"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Secure Boot: https://docs.ghostware.cc/#getting-started/secure-boot",
          "Disable Virtualization: https://docs.ghostware.cc/#getting-started/virtualization-errors"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Launch Loader",
            content: [
              "Run the loader as Administrator"
            ]
          },
          {
            title: "Log In",
            content: [
              "Enter your key or account details"
            ]
          },
          {
            title: "Inject",
            content: [
              "Press Inject and wait for confirmation"
            ]
          },
          {
            title: "Start Game",
            content: [
              "Launch Apex Legends once injection is complete"
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Press INSERT in-game to open the menu"
            ]
          }
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "If you have any issues, create a support ticket on our Discord: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "fortnite/exodus",
    next: "counter-strike/predator"
  },

  "counter-strike/predator": {
    slug: "counter-strike/predator",
    groupId: "counter-strike",
    groupTitle: "Counter Strike",
    title: "Predator",
    intro: "Predator setup and support information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://predator.systems/products/",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Windows Defender: https://docs.ghostware.cc/#anti-virus",
          "Disable Windows Security: https://docs.ghostware.cc/#getting-started/windows-security"
        ]
      },
      {
        id: "instructions",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Register Account & Activate Key",
            content: [
              "Go https://predator.systems/products/ and register an account, Once logged in you will see 'Key activation' near the top right enter your key and activate it."
            ]
          },
          {
            title: "Download Loader",
            content: [
              "Once key is activated navigate to the 'panel' tab at the top, Here you will see your active subscription and a download link to the loader, Download the loader by clicking 'Launcher'"
            ]
          },
          {
            title: "Inject",
            content: [
              "Once download is successful, Open the loader, login to your account and load the cheat."
            ]
          },
          {
            title: "Start Game",
            content: [
              "Once loader says 'Waiting for the game', Load Counter Strike."
            ]
          },
          {
            title: "Open Menu",
            content: [
              "Press INSERT in-game to open the menu"
            ]
          }
        ]
      },
      {
        id: "common-issues",
        title: "Common Issues",
        steps: [
          {
            title: "Loader Will Not Open",
            content: [
              "Run as administrator",
              "Move the loader to a simple folder like C:\\Loader",
              "Use a VPN",
              "Check antivirus quarantine"
            ]
          },
          {
            title: "Internal public server error",
            content: [
              "Fully delete anti-virus + anti-cheats.",
              "Ensure firewall settings are disabled.",
              "Try a VPN"
            ]
          },
          {
            title: "Menu Not Showing",
            content: [
              "Make sure the overlay is enabled",
              "Try borderless or windowed mode",
              "Restart PC"
            ]
          }
        ]
      },
      {
        id: "notes",
        title: "Notes",
        list: [
          "Replace all placeholder links with your real links",
          "You can add images using the same image structure as your other pages",
          "You can duplicate sections or rename them as needed"
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "If you have any issues, create a support ticket on our Discord: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "apex-legends/arcane",
    next: "spoofer/temp-spoofer"
  },

  "spoofer/temp-spoofer": {
    slug: "spoofer/temp-spoofer",
    groupId: "spoofer",
    groupTitle: "Spoofer",
    title: "Temp Spoofer",
    intro: "Temporary spoofer setup information.",
    sections: [
      {
        id: "required-files",
        title: "Required Files",
        list: [
          "Loader: https://loader.unbanned.gg/download",
          "Defender Control: https://docs.ghostware.cc/#anti-virus",
          "Visual C++ Redistributable: https://docs.ghostware.cc/#getting-started/redistributables"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Disable Hyper-V: ",
          "Enable Virtualization in BIOS: ",
          "Disable all anti-cheat software before spoofing",
          "Disable all VPN services while spoofing",
          "Disable antivirus using Defender Control: ",
          "Install runtime files before use: https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/"
        ]
      },
      {
        id: "setup",
        title: "Step-by-Step Instructions",
        steps: [
          {
            title: "Disable BIOS Settings",
            content: [
              "Disable Hyper-V",
              "Enable Virtualization",
              "These settings vary by motherboard, so follow a BIOS guide if needed",
              "You will not pass the spoofer requirement checks if these are incorrect"
            ]
          },
          {
            title: "Disable Anti-Cheat Software",
            content: [
              "Make sure any and all anti-cheat software is disabled and not running while spoofing"
            ]
          },
          {
            title: "Disable Antivirus",
            content: [
              "Use Defender Control instead of disabling antivirus manually",
              "If you disable it manually, it may re-enable on next startup and spoof incorrectly",
              "Disable all antivirus software running on your machine"
            ]
          },
          {
            title: "Disable VPNs",
            content: [
              "Make sure all VPN services are off while spoofing",
              "VPNs can lead to bluescreens while spoofing",
              "After you are successfully spoofed, you can enable a VPN again"
            ]
          },
          {
            title: "Install Runtime Files",
            content: [
              "Install runtime files",
              "Run the .bat file as administrator"
            ]
          }
        ]
      },
      {
        id: "eac-be-usage",
        title: "EAC / BE Usage",
        steps: [
          {
            title: "Cleaning",
            content: [
              "Click the Clean button, even if your operating system is fresh",
              "This cleans and spoofs certain operating system components",
              "Once cleaning is complete, go to the Spoof button and hit Spoof",
              "The first time you run the spoofer, it will prompt you to restart to set up dependencies",
              "After restarting, log in again and click Spoof",
              "Once prompted that you are fully spoofed and the loader closes, compare your serials in a HWID checker",
              "If everything has changed, you are ready to play your EAC / BE game"
            ]
          }
        ],
        list: [
          "The cleaner currently only supports Fortnite and Fortnite tournaments",
          "For other games, use a third-party cleaner or a fresh Windows reinstall if needed",
          "Close the spoofer before starting games",
          "Do not put the PC to sleep while spoofed — reboot and spoof again instead"
        ]
      },
      {
        id: "seeding-system",
        title: "Seeding System",
        paragraphs: [
          "The seed system is used to keep your HWID static between reboots."
        ],
        list: [
          "If the seed changes, your HWID changes too",
          "If keeping the same HWID matters, back up your seed",
          "Change your seed each time you get banned"
        ]
      },
      {
        id: "general-information",
        title: "General Information",
        list: [
          "Avoid cleaning every time you spoof",
          "Try to keep the same seed when spoofing on the same account",
          "Repeat the spoofing process after reboot if you want to keep playing",
          "The spoofer is temporary and your original serials return after reboot"
        ]
      },
      {
        id: "testing",
        title: "Testing",
        steps: [
          {
            title: "How to Test Properly",
            content: [
              "Do NOT use any cheats while testing",
              "Do not use skin changers, anti-recoil scripts, aim assist, or any third-party software",
              "Create a new account and start the game",
              "Enter a real server or match — the main menu is not enough",
              "Play or idle in-game for at least 120 minutes",
              "If you do not receive a kick or ban, the spoofer is safe to use"
            ]
          }
        ],
        list: [
          "If you get banned while the spoofer is listed as undetected, reinstall Windows and test again",
          "Your system may still have permanent traces from older software"
        ]
      },
      {
        id: "bsod",
        title: "BSOD",
        paragraphs: [
          "Here is how to fix and debug temp BSODs properly."
        ],
        steps: [
          {
            title: "Basic Fixes",
            content: [
              "Update all drivers, including GPU drivers",
              "Make sure TPM is disabled",
              "Disable Fast Startup in BIOS",
              "Uninstall ALL VPN clients"
            ]
          },
          {
            title: "Repair Commands",
            content: [
              "Run CMD as administrator and use the commands below"
            ]
          },
          {
            title: "If BSOD Continues",
            content: [
              "Restart and try spoofing again",
              "If the issue continues, perform a clean Windows reinstall from USB",
              "Delete all partitions during reinstall",
              "After reinstalling, repeat the steps above"
            ]
          },
          {
            title: "Minidump Location",
            content: [
              "Open File Explorer",
              "Go to C:\\Windows\\Minidump",
              "Look for .dmp files"
            ]
          },
          {
            title: "Dump Settings",
            content: [
              "Press Win + R",
              "Type sysdm.cpl",
              "Go to the Advanced tab",
              "Under Startup and Recovery, click Settings",
              "Set Write debugging information to Automatic memory dump or Small memory dump (256 KB)",
              "Make sure the dump path is %SystemRoot%\\Minidump"
            ]
          },
          {
            title: "Send Support Info",
            content: [
              "Run Discord as administrator so you can attach DMP files",
              "Tell support when the BSOD happens (on spoof, on Fortnite startup, midway through Fortnite, etc.)",
              "Also send your Windows version, e.g. WIN10 22H2"
            ]
          }
        ],
        codeBlocks: [
          {
            code: `sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth`
          }
        ]
      },
      {
        id: "game-bans",
        title: "Game Bans",
        paragraphs: [
          "If you are banned in-game, it usually means your system was not cleaned or spoofed properly, or you reused unsafe traces."
        ],
        list: [
          "Re-test on a fresh account",
          "Make sure the spoof completed successfully",
          "Use proper cleaning before testing",
          "Change your seed after bans"
        ]
      },
      {
        id: "product-spoofer-bans",
        title: "Product / Spoofer Bans",
        paragraphs: [
          "If the product itself becomes banned or flagged, stop using it and contact support before continuing."
        ],
        list: [
          "Do not keep retrying if the product appears flagged",
          "Open a support ticket with details",
          "Include evidence and explain exactly what happened"
        ]
      },
      {
        id: "issues",
        title: "If You Have Issues",
        paragraphs: [
          "If you have any issues, create a support ticket on our Discord: https://discord.gg/2jduYhKbZn"
        ]
      }
    ],
    prev: "counter-strike/predator",
    next: "spoofer/verse-perm-spoofer"
  },

  "spoofer/verse-perm-spoofer": {
    slug: "spoofer/verse-perm-spoofer",
    groupId: "spoofer",
    groupTitle: "Spoofer",
    title: "Verse Perm Spoofer",
    intro: "General troubleshooting and support information.",
    sections: [
      {
        id: "important-note",
        title: "Important Note",
        paragraphs: [
          "If you are having launch, driver, BIOS, or Windows issues, contact support before making major system changes. For a more in-depth guide please follow the prompts https://verse-instructions.com/permanent/eac-be/welcome"
        ]
      },
      {
        id: "before-you-start",
        title: "Before You Start",
        list: [
          "Update Windows fully",
          "Update chipset and GPU drivers",
          "Install Visual C++ Redistributables",
          "Disable third-party antivirus if it is blocking files",
          "Close unnecessary background applications"
        ]
      },
      {
        id: "system-checks",
        title: "System Checks",
        steps: [
          {
            title: "BIOS Mode",
            content: [
              "Press Win + R",
              "Type msinfo32",
              "Check BIOS Mode"
            ]
          },
          {
            title: "Secure Boot",
            content: [
              "In msinfo32, check Secure Boot State"
            ]
          },
          {
            title: "Virtualization",
            content: [
              "Open Task Manager → Performance → CPU",
              "Check the Virtualization field"
            ]
          }
        ]
      },
      {
        id: "common-issues",
        title: "Common Issues",
        steps: [
          {
            title: "Loader Will Not Open",
            content: [
              "Run as administrator",
              "Move the loader to a simple folder like C:\\Loader",
              "Check antivirus quarantine",
              "Reinstall Visual C++ Redistributables"
            ]
          },
          {
            title: "Unexpected Restart or Crash",
            content: [
              "Update drivers",
              "Disable unstable startup apps",
              "Check Windows Event Viewer for errors"
            ]
          },
          {
            title: "Network or Login Problems",
            content: [
              "Check internet connection",
              "Disable VPN temporarily",
              "Try again after restarting the PC"
            ]
          }
        ]
      },
      {
        id: "support",
        title: "If You Have Issues",
        paragraphs: [
          "Open a support ticket and include your exact error, Windows version, and screenshots."
        ]
      }
    ],
    prev: "spoofer/temp-spoofer",
    next: null
  }
};

const sidebarNav = document.getElementById('sidebarNav');
const docArticle = document.getElementById('docArticle');
const tocNav = document.getElementById('tocNav');
const mobileNavBtn = document.getElementById('mobileNavBtn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobileOverlay');
const themeToggle = document.getElementById('themeToggle');

let sectionNodes = [];
let currentSlug = 'anti-virus';
const groupOpenState = Object.fromEntries(NAV_GROUPS.map(g => [g.id, false]));
let pendingTocSectionId = null;

const safeStorage = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch {}
  }
};

function routeFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, '').trim());
  return hash || 'anti-virus';
}

function pageHref(slug) {
  return `#${slug}`;
}

function getPage(slug) {
  return PAGES[slug] || PAGES['anti-virus'];
}

function getGroupIdForSlug(slug) {
  return getPage(slug).groupId;
}

function ensureGroupOpenForSlug(slug) {
  const groupId = getGroupIdForSlug(slug);
  if (groupId && groupOpenState[groupId] !== undefined) groupOpenState[groupId] = true;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function syncPanelState(panel, open, animate = true) {
  if (!panel) return;
  if (!animate) panel.style.transition = 'none';
  panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
  panel.style.opacity = open ? '1' : '0';
  panel.style.transform = open ? 'translateY(0)' : 'translateY(-6px)';
  if (!animate) requestAnimationFrame(() => { panel.style.transition = ''; });
}

function renderSidebar(activeSlug) {
  ensureGroupOpenForSlug(activeSlug);

  sidebarNav.innerHTML = NAV_GROUPS.map(group => {
    const isOpen = Boolean(groupOpenState[group.id]);
    const pageMarkup = group.pages.map(page => `
      <a href="${pageHref(page.slug)}" class="nav-link${page.slug === activeSlug ? ' active' : ''}" data-slug="${page.slug}">
        ${escapeHtml(page.title)}
      </a>
    `).join('');

    return `
      <div class="nav-group${isOpen ? ' is-open' : ''}" data-group-id="${group.id}">
        <button class="nav-group-toggle" type="button" aria-expanded="${String(isOpen)}">
          <span class="nav-group-title">${escapeHtml(group.title)}</span>
          <span class="nav-chevron">⌃</span>
        </button>
        <div class="nav-group-panel">${pageMarkup}</div>
      </div>
    `;
  }).join('');

  sidebarNav.querySelectorAll('.nav-group').forEach(group => {
    const groupId = group.dataset.groupId;
    const panel = group.querySelector('.nav-group-panel');
    syncPanelState(panel, Boolean(groupOpenState[groupId]), false);
  });

  sidebarNav.querySelectorAll('.nav-group-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('.nav-group');
      const groupId = group.dataset.groupId;
      const panel = group.querySelector('.nav-group-panel');
      const open = !group.classList.contains('is-open');
      group.classList.toggle('is-open', open);
      groupOpenState[groupId] = open;
      button.setAttribute('aria-expanded', String(open));
      syncPanelState(panel, open, true);
    });
  });
}

function updateSidebarActive(activeSlug) {
  ensureGroupOpenForSlug(activeSlug);

  sidebarNav.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.slug === activeSlug);
  });

  sidebarNav.querySelectorAll('.nav-group').forEach(group => {
    const groupId = group.dataset.groupId;
    const open = Boolean(groupOpenState[groupId]);
    group.classList.toggle('is-open', open);
    const button = group.querySelector('.nav-group-toggle');
    const panel = group.querySelector('.nav-group-panel');
    button?.setAttribute('aria-expanded', String(open));
    syncPanelState(panel, open, false);
  });
}

function renderItemWithLinks(text) {
  let value = escapeHtml(String(text || ''));

  value = value.replace(/(https?:\/\/[^\s]+)/g, (url) => {
    return `<a href="${url}" target="_blank" rel="noreferrer" class="docs-inline-link">Here</a>`;
  });

  value = value.replace(/([A-Z]:\\[^\n]+)/g, (match) => {
    return `<code>${match}</code>`;
  });

  value = value.replace(/(?<!code>)(\b[\w-]+\.exe\b)(?!<\/code>)/g, (match) => {
    return `<code>${match}</code>`;
  });

  value = value.replace(/\bRED\b/g, `<span class="red">RED</span>`);

  return value;
}

function renderSteps(steps) {
  return `
    <ol class="doc-steps">
      ${steps.map(step => `
        <li class="doc-step">
          <div class="step-title"><strong>${escapeHtml(step.title)}:</strong></div>
          <ul class="step-sub">
            ${(step.content || []).map(item => `<li>${renderItemWithLinks(item)}</li>`).join('')}
          </ul>
        </li>
      `).join('')}
    </ol>
  `;
}

function renderImages(images) {
  return images.map(image => `
    <div class="doc-image-wrap">
      <img
        class="doc-image"
        src="${escapeHtml(image.src)}"
        alt="${escapeHtml(image.alt || '')}"
        loading="lazy"
      />
    </div>
  `).join('');
}

function renderSection(section) {
  const paragraphs = (section.paragraphs || [])
    .map(t => `<p>${renderItemWithLinks(t)}</p>`)
    .join('');

  const steps = section.steps?.length
    ? renderSteps(section.steps)
    : '';

  const codeBlocks = section.codeBlocks?.length
    ? section.codeBlocks.map(block => `
        <div class="doc-code-wrap">
          <button class="doc-copy-btn" data-copy="${escapeHtml(block.code)}">Copy</button>
          <pre class="doc-code"><code>${escapeHtml(block.code)}</code></pre>
        </div>
      `).join('')
    : '';

  const list = section.list?.length
    ? `<ul class="doc-list">
        ${section.list.map(i => `<li>${renderItemWithLinks(i)}</li>`).join('')}
       </ul>`
    : '';

  const items = section.items?.length
    ? `<ul class="doc-list">
        ${section.items.map(i => `<li>${renderItemWithLinks(i)}</li>`).join('')}
       </ul>`
    : '';

  const images = section.images?.length
    ? section.images.map(img => `
        <div class="doc-image-wrap">
          <img
            class="doc-image"
            src="${escapeHtml(img.src)}"
            alt="${escapeHtml(img.alt || '')}"
            loading="lazy"
          />
        </div>
      `).join('')
    : '';

  return `
    <section class="doc-section" id="${escapeHtml(section.id)}">
      <h2>${escapeHtml(section.title)}</h2>
      ${paragraphs}
      ${steps}
      ${codeBlocks}
      ${list}
      ${items}
      ${images}
    </section>
  `;
}

function footerCard(slug, label) {
  if (!slug || !PAGES[slug]) return '';
  return `
    <a class="footer-card" href="${pageHref(slug)}">
      <span class="footer-card-label">${label}</span>
      <strong>${escapeHtml(PAGES[slug].title)}</strong>
      <span class="footer-card-arrow">›</span>
    </a>
  `;
}

function renderPage(slug) {
  const page = getPage(slug);
  const kicker = page.groupTitle || 'GhostWare';

  const header = `
    <header class="page-header">
      <div class="page-kicker"><span>${escapeHtml(kicker)}</span></div>
      <h1>${escapeHtml(page.title)}</h1>
      <p>${escapeHtml(page.intro || '')}</p>
    </header>
  `;

  const content = page.sections.map(renderSection).join('');

  const footer = `
    <footer class="doc-footer">
      <div class="doc-footer-top">
        ${footerCard(page.prev, 'PREVIOUS')}
        ${footerCard(page.next, 'NEXT')}
      </div>
      <div class="doc-footer-bottom">
        <div class="footer-brand">
          <img src="./assets/logo.webp" alt="GhostWare logo" class="footer-logo" />
          <p>Copyright © GhostWare. All rights reserved.</p>
        </div>
        <div class="footer-links">
          <a href="https://ghostware.cc/" target="_blank" rel="noreferrer">Store</a>
          <a href="https://discord.gg/2jduYhKbZn" target="_blank" rel="noreferrer">Support</a>
        </div>
      </div>
    </footer>
  `;

  docArticle.innerHTML = header + content + footer;
  document.title = `${page.title} | GhostWare Docs`;

  sectionNodes = [...docArticle.querySelectorAll('.doc-section')];
  buildToc();
  window.scrollTo(0, 0);

  requestAnimationFrame(() => {
    updateActiveToc();
    requestAnimationFrame(updateActiveToc);
  });
}

function buildToc() {
  tocNav.innerHTML = '<div class="toc-indicator" id="tocIndicator"></div>';

  sectionNodes.forEach(section => {
    const link = document.createElement('a');
    link.href = `#${routeFromHash()}::${section.id}`;
    link.dataset.section = section.id;
    link.className = 'toc-link';
    link.textContent = section.querySelector('h2')?.textContent?.trim() || 'Section';

    link.addEventListener('click', e => {
      e.preventDefault();
      pendingTocSectionId = section.id;
      setActiveTocLink(link);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        if (pendingTocSectionId === section.id) pendingTocSectionId = null;
        updateActiveToc();
      }, 420);
    });

    tocNav.appendChild(link);
  });
}

function setActiveTocLink(activeLink) {
  const indicator = tocNav.querySelector('.toc-indicator');
  let resolved = activeLink;

  tocNav.querySelectorAll('.toc-link').forEach(link => {
    const isActive = link === activeLink;
    link.classList.toggle('active', isActive);
    if (isActive) resolved = link;
  });

  if (!indicator || !resolved) {
    if (indicator) indicator.style.opacity = '0';
    return;
  }

  const navRect = tocNav.getBoundingClientRect();
  const linkRect = resolved.getBoundingClientRect();
  indicator.style.transform = `translateY(${linkRect.top - navRect.top}px)`;
  indicator.style.height = `${linkRect.height}px`;
  indicator.style.opacity = '1';
}

function updateActiveToc() {
  if (!sectionNodes.length) return;

  const offset = window.scrollY + 130;
  let active = sectionNodes[0];

  sectionNodes.forEach(section => {
    if (section.offsetTop <= offset) active = section;
  });

  if (pendingTocSectionId) {
    const pending = sectionNodes.find(s => s.id === pendingTocSectionId);
    if (pending) active = pending;
  }

  const activeLink = [...tocNav.querySelectorAll('.toc-link')].find(l => l.dataset.section === active.id) || null;
  setActiveTocLink(activeLink);

  if (pendingTocSectionId && active.id === pendingTocSectionId && Math.abs(active.offsetTop - offset) < 120) {
    pendingTocSectionId = null;
  }
}

function applyTheme(mode) {
  document.documentElement.dataset.theme = mode;
  safeStorage.set('ghostware-theme', mode);

  const icon = themeToggle.querySelector('.theme-icon');
  const label = themeToggle.querySelector('.theme-label');

  if (mode === 'light') {
    icon.textContent = '☾';
    label.textContent = 'Dark';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    icon.textContent = '☀';
    label.textContent = 'Light';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  }
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'light' ? 'dark' : 'light');
}

function handleRouteChange() {
  const slug = routeFromHash();
  pendingTocSectionId = null;
  currentSlug = slug;
  updateSidebarActive(slug);
  renderPage(slug);
  closeMobileNav();
}

function openMobileNav() {
  sidebar?.classList.add('open');
  mobileOverlay?.classList.add('show');
  document.body.classList.add('nav-open');
  mobileNavBtn?.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  sidebar?.classList.remove('open');
  mobileOverlay?.classList.remove('show');
  document.body.classList.remove('nav-open');
  mobileNavBtn?.setAttribute('aria-expanded', 'false');
}

mobileNavBtn?.addEventListener('click', () => {
  sidebar?.classList.contains('open') ? closeMobileNav() : openMobileNav();
});

mobileOverlay?.addEventListener('click', closeMobileNav);
window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('scroll', updateActiveToc, { passive: true });
window.addEventListener('resize', updateActiveToc);

document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.doc-copy-btn');
  if (!btn) return;

  const text = btn.getAttribute('data-copy');

  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "Copied";
    setTimeout(() => btn.textContent = "Copy", 1200);
  } catch {
    btn.textContent = "Failed";
  }
});

themeToggle?.addEventListener('click', toggleTheme);

applyTheme(safeStorage.get('ghostware-theme') || 'dark');

if (!window.location.hash) {
  window.location.hash = '#anti-virus';
}

renderSidebar(currentSlug);
handleRouteChange();
