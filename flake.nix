{
  description = "navidrome development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";

  outputs = { self, nixpkgs }:
    let pkgs = nixpkgs.legacyPackages.x86_64-linux; in {
      # Tools for rift VMs; see rift://nix-guide.
      # Go and Node versions must satisfy go.mod and .nvmrc (checked by `make check_env`).
      # gcc is for cgo (go-sqlite3); chromium is for driving the UI headlessly.
      fixed-labs.rift.x86_64-linux = {
        packages = with pkgs; [
          go_1_27
          nodejs_24
          gcc
          gnumake
          pkg-config
          git
          curl
          sqlite
          ffmpeg
          chromium
        ];
      };
    };
}
