{
  description = "Development Shell for jonsimeon.com";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    nx = pkgs.writeShellScriptBin "nx" ''
      pnpm nx run-many -t $1 -p @jonsimeon/$2 --parallel
    '';
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = [nx];
      shellHook = "echo 🐶 CODING TIME && nx dev resume";
    };
  };
}
