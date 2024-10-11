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
    project = "jonsimeon";
    nx = pkgs.writeShellScriptBin "nx" ''
      pnpm nx run-many -t $1 -p @${project}/$2 --parallel
    '';
    pnf = pkgs.writeShellScriptBin "pnf" ''
      pnpm --filter @${project}/$1 $2
    '';
    werk-werk = pkgs.writeShellScriptBin "werk-werk" ''
      tmux split-window -h -p 25 &&
      tmux select-pane -t 1 && nvim
    '';
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = [nx pnf werk-werk];
      shellHook = ''
        tmux new-session -A -d -s ${project} &&
        tmux send-keys -t ${project} 'werk-werk' Enter &&
        tmux send -t ${project} C-l &&
        tmux attach-session -t ${project}
      '';
    };
  };
}
